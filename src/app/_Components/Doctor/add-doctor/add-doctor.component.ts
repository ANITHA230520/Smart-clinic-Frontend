import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doctor } from 'src/app/_Models/doctor.model';
import { DoctorService } from 'src/app/_Services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})


export class DoctorComponent implements OnInit{
  docDetail !:FormGroup;
  docObj : Doctor=new Doctor();
  docList : Doctor[]= [];

  constructor(private formBuilder: FormBuilder , private docService :DoctorService){}
  
  ngOnInit(): void {
    this.getAllDoctor();
    this.docDetail = this.formBuilder.group({
      doctorId:[''],
      doctorName:[''],
      doctormail:[''],
      doctorphoneNo:[''],
      specialization:[''],
      experience:[''],
      city:[''],
      password:['']

    });

  }
  addDoctor(){
    console.log(this.docDetail);
    this.docObj.doctorId=this.docDetail.value.doctorId;
    this.docObj.doctorName=this.docDetail.value.doctorName;
    this.docObj.doctormail=this.docDetail.value.doctormail;
    this.docObj.doctorphoneNo=this.docDetail.value.doctorphoneNo;
    this.docObj.specialization=this.docDetail.value.specialization;
    this.docObj.experience=this.docDetail.value.experience;
    this.docObj.city=this.docDetail.value.city;
    this.docObj.password=this.docDetail.value.password;
     
    this.docService.addDoctor(this.docObj).subscribe(res=>{
      console.log(res);
      this.getAllDoctor();
    },err=>{
      console.log(err);
    });
  }

  getAllDoctor(){
    this.docService.getAllDoctor().subscribe(res=>{
      this.docList=res;
    },err=>{
      console.log("error while fetching data");
    })
  }

  
}
