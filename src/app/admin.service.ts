import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:8080/api/v1/admin/list";
  
  constructor(private httpClient: HttpClient) { }

  getAdminList(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseURL}`);
  }
}
