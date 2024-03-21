import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../_Models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  baseURL : string;
 
  constructor(private http:HttpClient) {
    this.baseURL="http://localhost:8080/api/patients"
   
   }
   addPatient(pat : Patient): Observable<Patient>{
    return this.http.post<Patient>(this.baseURL,pat);
   }

   getAllPatient(): Observable<Patient[]>{
    return this.http.get<Patient[]>(this.baseURL);

   }
   updatePatient(pat : Patient): Observable<Patient>{
    return this.http.put<Patient>(this.baseURL,pat);
   }

   deletePatient(patientId:number) :Observable<Object>{
    return this.http.delete(`${this.baseURL}/${patientId}`);

  }
  // onLogin(obj:any): Observable <any> {
  //   return this.http.post("http://localhost:8080/api/patients",obj);
  // }
}
