import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Carteira } from '../../models/carteira';
import { CarteiraQueryCommand } from '../../query-command/carteira-query-command';
import { CarteirasService } from '../../services/carteiras.service';
import { CarteiraEditComponent } from '../carteira-edit/carteira-edit.component';

@Component({
  selector: 'app-carteiras',
  templateUrl: './carteiras.component.html',
  styleUrls: ['./carteiras.component.scss']
})
export class CarteirasComponent implements OnInit {

  constructor(private carteirasService: CarteirasService,
    private modalService: NzModalService) { }

  query: CarteiraQueryCommand = new CarteiraQueryCommand();
  carteiras?: Carteira[];

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.carteiras = undefined;
    this.carteirasService.get(this.query).subscribe(result => this.carteiras = result.items);
  }

  limpar(): void {
    this.query = new CarteiraQueryCommand();
    this.pesquisar();
  }

  novo(): void {
    this.modalService.create({
      nzTitle: 'Cadastrar uma nova carteira',
      nzContent: CarteiraEditComponent,
      nzOnOk: () => this.pesquisar()
    });
  }

  editar(carteiraId?: string): void {
    this.modalService.create({
      nzTitle: 'Editar carteira',
      nzContent: CarteiraEditComponent,
      nzData: { carteiraId },
      nzOnOk: () => this.pesquisar(),
    });
  }

  excluir(carteiraId?: string): void {
    if (!carteiraId)
      return;

    this.modalService.confirm({
      nzTitle: 'Deseja excluir este carteira?',
      nzOnOk: () => {
        this.carteirasService.delete(carteiraId).subscribe(() => this.pesquisar());
      }
    });
  }

}
