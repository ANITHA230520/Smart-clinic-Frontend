import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doctor } from 'src/app/_Models/doctor.model';
import { DoctorService } from 'src/app/_Services/doctor.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent {
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
      city:['']

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
