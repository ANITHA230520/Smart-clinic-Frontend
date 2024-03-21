import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from 'src/app/_Models/patient.model';
import { PatientService } from 'src/app/_Services/patient.service';

@Component({
  selector: 'app-deletepatient',
  templateUrl: './deletepatient.component.html',
  styleUrls: ['./deletepatient.component.css']
})
export class DeletepatientComponent implements OnInit{
  patDetail !:FormGroup;
  patObj : Patient=new Patient();
  patList : Patient[]= []
constructor(private formBuilder: FormBuilder , private patService :PatientService){}

ngOnInit(): void {
  this.getAllPatient();
  this.patDetail = this.formBuilder.group({
    patientId:[0],
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

  deletePatient(patientId:any){
    alert('deleteMethod');
    this.patService.deletePatient(patientId).subscribe(data=>{
      console.log(data);
      this.getAllPatient();
    })
  }

}

