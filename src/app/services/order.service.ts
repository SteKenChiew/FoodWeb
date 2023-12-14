import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/merchant';
  constructor(private http: HttpClient) {}

  getMerchantActiveOrders(merchantUuid: string): Observable<any[]> {
    const url = `${this.apiUrl}/orders/active?merchantUuid=${merchantUuid}`;
    return this.http.get<any[]>(url);
  }
}
