import { HttpParams } from "@angular/common/http";
import { QueryCommand } from "./query-command";

export abstract class HasIdQueryCommand<TKey> implements QueryCommand {
    public id?: TKey;
    public ids?: TKey[];
    public ignoreIds?: TKey[];

    params(): HttpParams {
        let params = new HttpParams();

        if (this.id) {
            params = params.append('id', `${this.id}`);
        }

        for (let i = 0; this.ids && i < this.ids.length; i++) {
            params = params.append('ids', `${this.ids[i]}`);
        }

        for (let i = 0; this.ignoreIds && i < this.ignoreIds.length; i++) {
            params = params.append('ignoreIds', `${this.ignoreIds[i]}`);
        }

        return params;
    }
}