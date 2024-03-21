import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../_Models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  addSchURL : string;
  getSchURL : string;
  updateSchURL :string;
  constructor(private http:HttpClient) {
    this.addSchURL="http://localhost:8080/api/schedule/schedule"
    this.getSchURL="http://localhost:8080/api/schedule"
    this.updateSchURL="http://localhost:8080/api/schedule"
   }
   addSchedule(app :Schedule): Observable<Schedule>{
    return this.http.post<Schedule>(this.addSchURL,app);
   }

   getAllSchedules(): Observable<Schedule[]>{
    return this.http.get<Schedule[]>(this.getSchURL);

   }
   updateSchedule(sch : Schedule): Observable<Schedule>{
    return this.http.put<Schedule>(this.updateSchURL,sch);
   }
}
