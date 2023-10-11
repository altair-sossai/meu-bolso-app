import { HttpParams } from "@angular/common/http";
import { HasIdQueryCommand } from "src/app/infrastructure/query-commands/has-id.query-command";

export class CategoriaQueryCommand extends HasIdQueryCommand<string> {
    public query?: string;

    override params(): HttpParams {
        let params = super.params();

        if (this.query) {
            params = params.append('query', this.query);
        }

        return params;
    }
}