import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Schedule } from 'src/app/_Models/schedule.model';
import { ScheduleService } from 'src/app/_Services/schedule.service';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent {
  schDetail !:FormGroup;
  schObj : Schedule=new Schedule();
  schList : Schedule[]= []
constructor(private formBuilder: FormBuilder , private schService :ScheduleService){}

ngOnInit(): void {

  this.getAllSchedules();
  this.schDetail = this.formBuilder.group({
    scheduleId:[''],
    scheduleDate:[''],
    scheduleTime:[''],
    doctorId:['']
  });
}
getAllSchedules() {
  this.schService.getAllSchedules().subscribe(res=>{
    this.schList=res;
  },err=>{
    console.log("error while fetching data");
  })
 }
}
