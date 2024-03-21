import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../_Models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

   addDocURL : string;
   getDocURL : string;
   updateDocURL :string;
   deleteDocURL :string;
  constructor(private http:HttpClient) {
    this.addDocURL = "http://localhost:8080/api/doctors";
    this.getDocURL = "http://localhost:8080/api/doctors";
    this.updateDocURL="http://localhost:8080/api/doctors";
    this.deleteDocURL="http://localhost:8080/api/doctors"
   }

   addDoctor(doc : Doctor): Observable<Doctor>{
    return this.http.post<Doctor>(this.addDocURL,doc);
   }

   getAllDoctor(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.getDocURL);

   }
 
  updateDoctor(doc : Doctor): Observable<Doctor>{
    return this.http.put<Doctor>(this.updateDocURL,doc);
   }
  
  

  deleteDoctor(doctorId:number) :Observable<Object>{
    return this.http.delete(`${this.deleteDocURL}/${doctorId}`);

  }

  onLogin(obj:any): Observable <any> {
    return this.http.post("http://localhost:8080/api/doctors",obj);
  }
  
}
