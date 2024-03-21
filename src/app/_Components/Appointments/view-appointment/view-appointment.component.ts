import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Appointment} from 'src/app/_Models/appointment.model';
import { AppointmentService } from 'src/app/_Services/appointment.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent {
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

}
