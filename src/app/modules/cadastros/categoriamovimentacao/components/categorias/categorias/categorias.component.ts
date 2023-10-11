import { Component } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';
import { OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CategoriaQueryCommand } from '../../../query-command/categoria-query-command';
import { PaginationCommand } from 'src/app/infrastructure/pagination/pagination-command';
import { PaginationResult } from 'src/app/infrastructure/pagination/pagination-result';
import { Categoria } from '../../../models/categoria';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { CategoriaEditComponent } from '../../categoria-edit/categoria-edit/categoria-edit.component';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  constructor(private categoriasService: CategoriasService, private modalService: NzModalService) { }

  queryCommand: CategoriaQueryCommand = new CategoriaQueryCommand();
  paginationCommand: PaginationCommand<CategoriaQueryCommand> = new PaginationCommand<CategoriaQueryCommand>(this.queryCommand);
  result?: PaginationResult<Categoria>;

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
    this.categoriasService.get(this.paginationCommand).subscribe(result => this.result = result);
  }

  limpar(): void {
    this.queryCommand = new CategoriaQueryCommand();
    this.paginationCommand = new PaginationCommand<CategoriaQueryCommand>(this.queryCommand);
    this.pesquisar();
  }

  novo(): void {
    this.modalService.create({
      nzTitle: 'Cadastrar uma nova categoria',
      nzContent: CategoriaEditComponent, nzOnOk: () => this.pesquisar()
    });
  }

  editar(categoriaId?: string): void {
    this.modalService.create({
      nzTitle: 'Editar Categoria',
      nzContent: CategoriaEditComponent,
      nzData: { categoriaId },
      nzOnOk: () => this.pesquisar(),
    });
  }

  excluir(categoriaId?: string): void {
    if(!categoriaId)
    return;

    this.modalService.confirm({
      nzTitle: 'Deseja excluir esta Categoria?',
      nzOnOk: () => {
        this.categoriasService.delete(categoriaId).subscribe(() => this.pesquisar());
      }
    });
  }
}
