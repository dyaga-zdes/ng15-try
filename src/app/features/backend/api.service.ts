import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BackendResponse} from "../../interfaces/backend-response";
import {Observable} from "rxjs";


export type BackendAction =
  | 'menu.getData'

  | 'news.getItemsShort'
  ;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getData<T = BackendResponse>(action: BackendAction): Observable<T> {
    const endPoint = `/api/v1/?action=${action}`;
    return this.httpClient.get<T>(endPoint);
  }
}
