import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './_Components/login/login.component';
import { HomeComponent } from './_Components/home/home.component';
import { AboutUsComponent } from './_Components/about-us/about-us.component';
import { MenuBarComponent } from './_Components/menu-bar/menu-bar.component';
import { AddPatientComponent } from './_Components/Patient/add-patient/add-patient.component';
import { EditPatientComponent } from './_Components/Patient/edit-patient/edit-patient.component';
import { AddAppointmentComponent } from './_Components/Appointments/add-appointment/add-appointment.component';
import { AddAdminComponent } from './_Components/Admin/add-admin/add-admin.component';
import { AddScheduleComponent } from './_Components/Schedule/add-schedule/add-schedule.component';

import { EditScheduleComponent } from './_Components/Schedule/edit-schedule/edit-schedule.component';
import { EditAppointmentComponent } from './_Components/Appointments/edit-appointment/edit-appointment.component';
import { DeleteAppointmentComponent } from './_Components/Appointments/delete-appointment/delete-appointment.component';
import { DeletepatientComponent } from './_Components/Patient/deletepatient/deletepatient.component';
import { EditAdminComponent } from './_Components/Admin/edit-admin/edit-admin.component';
import { AdminDashBoardComponent } from './_Components/Admin/admin-dash-board/admin-dash-board.component';
import { DoctorComponent } from './_Components/Doctor/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './_Components/Doctor/edit-doctor/edit-doctor.component';
import { AddfbComponent } from './_Components/FB/addfb/addfb.component';
import { PatientdsahboardComponent } from './_Components/Patient/patientdsahboard/patientdsahboard.component';
import { ScheduledashBoardComponent } from './_Components/Schedule/scheduledash-board/scheduledash-board.component';
import { DoctordashBoardComponent } from './_Components/Doctor/doctordash-board/doctordash-board.component';
import { ViewPatientComponent } from './_Components/Patient/view-patient/view-patient.component';
import { ViewDoctorComponent } from './_Components/Doctor/view-doctor/view-doctor.component';
import { ViewScheduleComponent } from './_Components/Schedule/view-schedule/view-schedule.component';
import { ViewAppointmentComponent } from './_Components/Appointments/view-appointment/view-appointment.component';
import { DashBoardComponent } from './_Components/dash-board/dash-board.component';
import { ViewFeedBackComponent } from './_Components/FB/view-feed-back/view-feed-back.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    MenuBarComponent,
    AddPatientComponent,
    EditPatientComponent,
    AddAppointmentComponent,
    AddAdminComponent,
    AddScheduleComponent,
    EditScheduleComponent,
    EditAppointmentComponent,
    EditAdminComponent,
    DeleteAppointmentComponent,
    DeletepatientComponent,
    AdminDashBoardComponent,
    DoctorComponent,
    EditDoctorComponent,
    AddfbComponent,
    PatientdsahboardComponent,
    ScheduledashBoardComponent,
    DoctordashBoardComponent,
    ViewPatientComponent,
    ViewDoctorComponent,
    ViewScheduleComponent,
    ViewAppointmentComponent,
    DashBoardComponent,
    ViewFeedBackComponent
  
    
  ],
  imports: [
    BrowserModule,

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
