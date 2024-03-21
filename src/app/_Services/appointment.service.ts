import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../_Models/appointment.model';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
  addAppURL : string;
  getAppURL : string;
  updateAppURL : string;
  constructor(private http:HttpClient) {
    this.addAppURL="http://localhost:8080/api/appointments"
    this.getAppURL="http://localhost:8080/api/appointments"
    this.updateAppURL="http://localhost:8080/api/appointments"
   }
   addAppointment(app : Appointment): Observable<Appointment>{
    return this.http.post<Appointment>(this.addAppURL,app);
   }

   getAllAppointments(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.getAppURL);

   }
   updateAppointment(pat : Appointment): Observable<Appointment>{
    return this.http.put<Appointment>(this.updateAppURL,pat);
   }
   
}
