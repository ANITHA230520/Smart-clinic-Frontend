import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Appointment } from 'src/app/_Models/appointment.model';
import { AppointmentService } from 'src/app/_Services/appointment.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent {
  appDetail !:FormGroup;
  appObj : Appointment=new Appointment();
  appList : Appointment[]= []

  
constructor(private formBuilder: FormBuilder , private appService :AppointmentService){}

ngOnInit(): void {

this.getAllAppointments();
this.appDetail = this.formBuilder.group({
  appointmentId: [''],
  date: [''],
  time: [''],
  symptoms: [''],
  patientId:[''],
  scheduleId:[''],


});
}
getAllAppointments() {
  this.appService.getAllAppointments().subscribe(res=>{
    this.appList=res;
  },err=>{
    console.log("error while fetching data");
  })
}
editAppointment(app:Appointment){
  alert('editmethod');
  this.appDetail.controls['appointmentId'].setValue(app.appointmentId);
  this.appDetail.controls['date'].setValue(app.date);
  this.appDetail.controls['time'].setValue(app.time);
  this.appDetail.controls['symptoms'].setValue(app.symptoms);
  this.appDetail.controls['patientId'].setValue(app.patientId);
  this.appDetail.controls['scheduleId'].setValue(app.scheduleId);
 
}

updateAppointment()
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


}
  
