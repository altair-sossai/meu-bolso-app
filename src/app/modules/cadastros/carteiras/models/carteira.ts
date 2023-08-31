export class Carteira {
    public id?: string;
    public descricao?: string;
    public saldo?: number;
}

export class PaginationResult<T>{
    public items?: T[];
}