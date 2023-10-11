import { Component, inject } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { CategoriaCommand } from '../../../commands/categoria-command';
import { CategoriasService } from '../../../services/categorias.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.scss']
})
export class CategoriaEditComponent {

  readonly params: any = inject(NZ_MODAL_DATA);

  command?: CategoriaCommand;
  errors: any;
  busy = false;

  constructor(private modal: NzModalRef, private categoriaService: CategoriasService) { }

  ngOnInit(): void {
    if (this.params?.categoriaId) {
      this.pesquisar(this.params.categoriaId);
    }
    else {
      this.novo();
    }
  }

  novo() {
    this.command = new CategoriaCommand();
  }

  pesquisar(categoriaId: string): void {
    this.busy = true;

    this.categoriaService.find(categoriaId).subscribe(categoria => {
      this.command = categoria;
      this.busy = false;
    })
  } 

  salvar(): void {
    if (!this.command)
    return;

    this.busy = true;

    const observable = this.params?.categoriaId == null
    ? this.categoriaService.post(this.command)
    : this.categoriaService.put(this.command);

    observable.subscribe({
      next: () => {
        this.modal.triggerOk();
        this.busy = false;
      }
    })
  }

  close(): void {
    this.modal.destroy();
  }
}
