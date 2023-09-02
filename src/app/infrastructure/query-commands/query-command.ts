import { HttpParams } from "@angular/common/http";

export interface QueryCommand {
    params(): HttpParams;
}