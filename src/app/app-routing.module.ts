import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './_Components/about-us/about-us.component';
import { AddAdminComponent } from './_Components/Admin/add-admin/add-admin.component';
import { AdminDashBoardComponent } from './_Components/Admin/admin-dash-board/admin-dash-board.component';
import { EditAdminComponent } from './_Components/Admin/edit-admin/edit-admin.component';
import { AddAppointmentComponent } from './_Components/Appointments/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './_Components/Appointments/edit-appointment/edit-appointment.component';
import { ViewAppointmentComponent } from './_Components/Appointments/view-appointment/view-appointment.component';
import { DashBoardComponent } from './_Components/dash-board/dash-board.component';
import { DoctorComponent } from './_Components/Doctor/add-doctor/add-doctor.component';
import { DoctordashBoardComponent } from './_Components/Doctor/doctordash-board/doctordash-board.component';
import { EditDoctorComponent } from './_Components/Doctor/edit-doctor/edit-doctor.component';
import { ViewDoctorComponent } from './_Components/Doctor/view-doctor/view-doctor.component';
import { AddfbComponent } from './_Components/FB/addfb/addfb.component';
import { ViewFeedBackComponent } from './_Components/FB/view-feed-back/view-feed-back.component';
import { HomeComponent } from './_Components/home/home.component';
import { LoginComponent } from './_Components/login/login.component';
import { AddPatientComponent } from './_Components/Patient/add-patient/add-patient.component';
import { DeletepatientComponent } from './_Components/Patient/deletepatient/deletepatient.component';
import { EditPatientComponent } from './_Components/Patient/edit-patient/edit-patient.component'
import { PatientdsahboardComponent } from './_Components/Patient/patientdsahboard/patientdsahboard.component';
import { ViewPatientComponent } from './_Components/Patient/view-patient/view-patient.component';
import { AddScheduleComponent } from './_Components/Schedule/add-schedule/add-schedule.component';
import { EditScheduleComponent } from './_Components/Schedule/edit-schedule/edit-schedule.component';
import { ScheduledashBoardComponent } from './_Components/Schedule/scheduledash-board/scheduledash-board.component';
import { ViewScheduleComponent } from './_Components/Schedule/view-schedule/view-schedule.component';


const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'abt',component:AboutUsComponent},
  {path:'addpatient',component:AddPatientComponent},
  {path:'addappointment',component:AddAppointmentComponent},
  {path:'addschedule',component:AddScheduleComponent},
  {path:'admin',component:AddAdminComponent},
  {path:'editpatient',component:EditPatientComponent},
  {path:'editschedule',component:EditScheduleComponent},
  {path:'editappointment',component:EditAppointmentComponent},
  {path:'editadmin',component:EditAdminComponent},
  {path:'deletepatient',component:DeletepatientComponent},
  {path:'addashboard',component:AdminDashBoardComponent},
  {path:'addDoctor',component:DoctorComponent},
  {path:'editDoctor',component:EditDoctorComponent},
  {path:'fb',component:AddfbComponent},
  {path:'patdashboard',component:PatientdsahboardComponent},
  {path:'scdashboard',component:ScheduledashBoardComponent},
  {path:'docdashboard',component:DoctordashBoardComponent},
  {path:'viewpat',component:ViewPatientComponent},
  {path:'viewdoc',component:ViewDoctorComponent},
  {path:'viewapp',component:ViewAppointmentComponent},
  {path:'dashboard',component:DashBoardComponent},
  {path:'viewfeed',component:ViewFeedBackComponent},
  {path:'viewsch',component:ViewScheduleComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
