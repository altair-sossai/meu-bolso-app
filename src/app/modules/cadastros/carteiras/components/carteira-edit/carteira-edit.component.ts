import { Component, OnInit, inject } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { CarteiraCommand } from '../../commands/carteira-command';
import { CarteirasService } from '../../services/carteiras.service';

@Component({
  selector: 'app-carteira-edit',
  templateUrl: './carteira-edit.component.html',
  styleUrls: ['./carteira-edit.component.scss']
})
export class CarteiraEditComponent implements OnInit {

  readonly params: any = inject(NZ_MODAL_DATA);

  command?: CarteiraCommand;
  errors: any;
  busy = false;

  constructor(private modal: NzModalRef,
    private carteiraService: CarteirasService) {
  }

  ngOnInit(): void {
    if (this.params?.carteiraId) {
      this.pesquisar(this.params.carteiraId);
    }
    else {
      this.novo();
    }
  }

  novo(): void {
    this.command = new CarteiraCommand();
  }

  pesquisar(carteiraId: string): void {
    this.busy = true;

    this.carteiraService.find(carteiraId).subscribe(carteira => {
      this.command = carteira;
      this.busy = false;
    });
  }

  salvar(): void {
    if (!this.command)
      return;

    this.busy = true;

    const observable = this.params?.carteiraId == null
      ? this.carteiraService.post(this.command)
      : this.carteiraService.put(this.command);

    observable.subscribe({
      next: () => {
        this.modal.triggerOk();
        this.busy = false;
      }, error: result => {
        this.errors = result.error.errors;
        this.busy = false;
      }
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
