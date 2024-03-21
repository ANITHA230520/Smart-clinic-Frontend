import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Appointment } from 'src/app/_Models/appointment.model';
import { AppointmentService } from 'src/app/_Services/appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  appDetail !:FormGroup;
  appObj : Appointment=new Appointment();
  appList : Appointment[]= []
constructor(private formBuilder: FormBuilder , private appService :AppointmentService){}

ngOnInit(): void {

  this.getAllAppointments();
  this.appDetail = this.formBuilder.group({
    appointmentId:[''],
    date:[''],
    time:[''],
    symptoms:[''],
    patientId:[''],
    scheduleId:[''],
    
  });
}
  
  addAppointment()
   {
    console.log(this.appDetail);
    this.appObj.appointmentId=this.appDetail.value.appointmentId;
    this.appObj.date=this.appDetail.value.date;
    this.appObj.time=this.appDetail.value.time;
    this.appObj. symptoms=this.appDetail.value.symptoms;
    this.appObj.patientId=this.appDetail.value.patientId;
    this.appObj.scheduleId=this.appDetail.value.scheduleId;
   
     
    this.appService.addAppointment(this.appObj).subscribe(res=>{
      console.log(res);
      this.getAllAppointments();
    },err=>{
      console.log(err);
    });
  }
  getAllAppointments() {
    this.appService.getAllAppointments().subscribe(res=>{
      this.appList=res;
    },err=>{
      console.log("error while fetching data");
    })
  }
    
  }
