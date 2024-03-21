import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Patient } from 'src/app/_Models/patient.model';
import {PatientService} from 'src/app/_Services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit{
  patDetail !:FormGroup;
  patObj : Patient=new Patient();
  patList : Patient[]= []
constructor(private formBuilder: FormBuilder , private patService :PatientService){}

ngOnInit(): void {

  this.getAllPatient();
  this.patDetail = this.formBuilder.group({
    patientId:[''],
    patientName:new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern('^[a-zA-Z ]*$')]),
    patientAge:[''],
    bloodGroup:[''],
    height:[''],
    weight:[''],
    gender:[''],
    phoneNo:[''],
    city:[''],
    email:[''],
    password:[''],
    temperature:['']
  });
}
  
  addPatient()
   {
    console.log(this.patDetail);
    this.patObj.patientId=this.patDetail.value.patientId;
    this.patObj.patientName=this.patDetail.value.patientName;
    this.patObj.patientAge=this.patDetail.value.patientAge;
    this.patObj. bloodGroup=this.patDetail.value. bloodGroup;
    this.patObj.height=this.patDetail.value.height;
    this.patObj.weight=this.patDetail.value.weight;
    this.patObj.gender=this.patDetail.value.gender;
    this.patObj.phoneNo=this.patDetail.value.phoneNo;
    this.patObj.city=this.patDetail.value.city;
    this.patObj.email=this.patDetail.value.email;
    this.patObj.password=this.patDetail.value.password;
    this.patObj.temperature=this.patDetail.value.temperature;
     
    this.patService.addPatient(this.patObj).subscribe(res=>{
      console.log(res);
      this.getAllPatient();
    },err=>{
      console.log(err);
    });
  }
  getAllPatient() {
    this.patService.getAllPatient().subscribe(res=>{
      this.patList=res;
    },err=>{
      console.log("error while fetching data");
    })
  }
    
  }

  

