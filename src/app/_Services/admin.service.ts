import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../_Models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseURL : string;
  
  constructor(private http:HttpClient) {
    this.baseURL="http://localhost:8080/api/admins"
    
   }
   addAdmin(ad : Admin): Observable<Admin>{
    return this.http.post<Admin>(this.baseURL,ad);
   }

   getAllAdmins(): Observable<Admin[]>{ 
    return this.http.get<Admin[]>(this.baseURL);

   }

  deleteAdmin(adminId:number) :Observable<Object>{
    return this.http.delete(`${this.baseURL}/${adminId}`);

  }

  updateAdmin(ad : Admin): Observable<Admin>{
    return this.http.put<Admin>(this.baseURL,ad);
   }
   
   onLogin(obj:any): Observable <any> {
    return this.http.post("http://localhost:8080/api/admins/validate",obj);
    }

}
