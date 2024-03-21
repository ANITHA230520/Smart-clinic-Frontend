import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from 'src/app/_Models/patient.model';
import { PatientService } from 'src/app/_Services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent {
  
  patDetail !:FormGroup;
  patObj : Patient=new Patient();
  patList : Patient[]= []
constructor(private formBuilder: FormBuilder , private patService :PatientService){}

ngOnInit(): void {

  this.getAllPatient();
  this.patDetail = this.formBuilder.group({
    patientId:[''],
    patientName:[''],
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
  getAllPatient() {
    this.patService.getAllPatient().subscribe(res=>{
      this.patList=res;
    },err=>{
      console.log("error while fetching data");
    })
  }
  editPatient(pat:Patient){
    alert('editmethod');
    this.patDetail.controls['patientId'].setValue(pat.patientId);
    this.patDetail.controls['patientName'].setValue(pat.patientName);
    this.patDetail.controls['patientAge'].setValue(pat.patientAge);
    this.patDetail.controls['bloodGroup'].setValue(pat.bloodGroup);
    this.patDetail.controls['height'].setValue(pat.height);
    this.patDetail.controls['weight'].setValue(pat.weight);
    this.patDetail.controls['gender'].setValue(pat.gender);
    this.patDetail.controls['phoneNo'].setValue(pat.phoneNo);
    this.patDetail.controls['city'].setValue(pat.city);
    this.patDetail.controls['email'].setValue(pat.email);
    this.patDetail.controls['password'].setValue(pat.password);
    this.patDetail.controls['temperature'].setValue(pat.temperature);
}

updatePatient()
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
}
 

