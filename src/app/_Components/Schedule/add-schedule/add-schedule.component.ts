import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Schedule } from 'src/app/_Models/schedule.model';
import { ScheduleService } from 'src/app/_Services/schedule.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {
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
  
  addSchedule()
   {
    console.log(this.schDetail);
    this.schObj.scheduleId=this.schDetail.value.scheduleId;
    this.schObj.scheduleDate=this.schDetail.value.scheduleDate;
    this.schObj.scheduleTime=this.schDetail.value.scheduleTime;
    this.schObj.doctorId=this.schDetail.value.doctorId;
    
     
    this.schService.addSchedule(this.schObj).subscribe(res=>{
      console.log(res);
      this.getAllSchedules();
    },err=>{
      console.log(err);
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
