import { HttpParams } from "@angular/common/http";
import { QueryCommand } from "../query-commands/query-command";

export class PaginationCommand<TQueryCommand extends QueryCommand> {
    constructor(filters: TQueryCommand) {
        this.filters = filters;
    }

    public filters?: TQueryCommand;
    public page?: number = 1;
    public pageSize?: number = 10;

    params(): HttpParams {
        let params = new HttpParams();

        const filtersParam = this.filters?.params();

        for (const key of filtersParam?.keys() || []) {
            for (const value of filtersParam?.getAll(key) || []) {
                params = params.append(`filters.${key}`, value);
            }
        }

        if (this.page) {
            params = params.append('page', this.page);
        }

        if (this.pageSize) {
            params = params.append('pageSize', this.pageSize);
        }

        return params;
    }
}