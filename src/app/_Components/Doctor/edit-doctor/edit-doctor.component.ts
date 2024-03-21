import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doctor } from 'src/app/_Models/doctor.model';
import { DoctorService } from 'src/app/_Services/doctor.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent {
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
  
    editDoctor(doc:Doctor){
      alert('editmethod');
      this.docDetail.controls['doctorId'].setValue(doc.doctorId);
      this.docDetail.controls['doctorName'].setValue(doc.doctorName);
      this.docDetail.controls['doctormail'].setValue(doc.doctormail);
      this.docDetail.controls['doctorphoneNo'].setValue(doc.doctorphoneNo);
      this.docDetail.controls['specialization'].setValue(doc.specialization);
      this.docDetail.controls['experience'].setValue(doc.experience);
      this.docDetail.controls['city'].setValue(doc.city);
      this.docDetail.controls['password'].setValue(doc.password)
    }
    updateDoctor(){
      this.docObj.doctorId=this.docDetail.value.doctorId;
      this.docObj.doctorName=this.docDetail.value.doctorName;
      this.docObj.doctormail=this.docDetail.value.doctormail;
      this.docObj.doctorphoneNo=this.docDetail.value.doctorphoneNo;
      this.docObj.specialization=this.docDetail.value.specialization;
      this.docObj.experience=this.docDetail.value.experience;
      this.docObj.city=this.docDetail.value.city;
      this.docObj.password=this.docDetail.value.password;
      
      this.docService.updateDoctor(this.docObj).subscribe(res=>{
        console.log(res);
        this.getAllDoctor();
      },err=>{
        console.log(err);
      });
    }

}


