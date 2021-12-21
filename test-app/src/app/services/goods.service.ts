import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  baseUrl:string
  constructor(private httpClient:HttpClient) {
      this.baseUrl="http://localhost:3000";
  }
  getGoods():Observable<any>{
      return this.httpClient.get(`${this.baseUrl}/goods`)
  }
}
