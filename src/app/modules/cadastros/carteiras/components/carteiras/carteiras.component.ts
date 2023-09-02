import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { PaginationCommand } from 'src/app/infrastructure/pagination/pagination-command';
import { PaginationResult } from 'src/app/infrastructure/pagination/pagination-result';
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

  queryCommand: CarteiraQueryCommand = new CarteiraQueryCommand();
  paginationCommand: PaginationCommand<CarteiraQueryCommand> = new PaginationCommand<CarteiraQueryCommand>(this.queryCommand);
  result?: PaginationResult<Carteira>;

  ngOnInit(): void {
    this.pesquisar();
  }

  queryParamsChange(params: NzTableQueryParams): void {
    this.paginationCommand.page = params.pageIndex;
    this.paginationCommand.pageSize = params.pageSize;

    this.pesquisar();
  }

  pesquisar(): void {
    this.result = undefined;
    this.carteirasService.get(this.paginationCommand).subscribe(result => this.result = result);
  }

  limpar(): void {
    this.queryCommand = new CarteiraQueryCommand();
    this.paginationCommand = new PaginationCommand<CarteiraQueryCommand>(this.queryCommand);
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
