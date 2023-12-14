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

  markOrderAsReady(merchantUuid: string, orderId: string): Observable<void> {
    const url = `${this.apiUrl}/orders/mark-as-ready?merchantUuid=${merchantUuid}&orderId=${orderId}`;
    return this.http.post<void>(url, {});
  }
  
  getMerchantReadyOrders(merchantUuid: string): Observable<any[]> {
    const url = `${this.apiUrl}/orders/ready?merchantUuid=${merchantUuid}`;
    return this.http.get<any[]>(url);
  }

  markOrderAsDone(merchantUuid: string, orderId: string): Observable<void> {
    const url = `${this.apiUrl}/orders/mark-as-done?merchantUuid=${merchantUuid}&orderId=${orderId}`;
    return this.http.post<void>(url, {});
  }


  getMerchantOrderHistory(merchantUuid: string): Observable<any[]> {
    const url = `${this.apiUrl}/orders/history?merchantUuid=${merchantUuid}`;
    return this.http.get<any[]>(url);
  }
}
