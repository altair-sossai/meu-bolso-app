import { HttpParams } from '@angular/common/http';

export class CarteiraQueryCommand {
    public query?: string;

    params(): HttpParams {
        let params = new HttpParams();

        if (this.query) {
            params = params.append('query', this.query);
        }

        return params;
    }
}
