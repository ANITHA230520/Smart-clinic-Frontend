import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Admin } from 'src/app/_Models/admin.model';
import { AdminService } from 'src/app/_Services/admin.service';
@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  adDetail !:FormGroup;
  adObj : Admin=new Admin();
  adList : Admin[]= []
constructor(private formBuilder: FormBuilder , private adService :AdminService){}

ngOnInit(): void {
 this.getAllAdmins();
  this.adDetail = this.formBuilder.group({
    adminId:[''],
    adminName:[''],
    phoneNumber:[''],
    emailId:[''],
    password:[''],
    
    
  });
}

getAllAdmins() {
  this.adService.getAllAdmins().subscribe(res=>{
    this.adList=res;
  },err=>{
    console.log("error while fetching data");
  })
}

editAdmin(ad:Admin){
  alert('editmethod');
  this.adDetail.controls['adminId'].setValue(ad.adminId);
  this.adDetail.controls['adminName'].setValue(ad.adminName);
  this.adDetail.controls['phoneNumber'].setValue(ad.phoneNumber);
  this.adDetail.controls['emailId'].setValue(ad.emailId);
  this.adDetail.controls['password'].setValue(ad.password);

}
updateAdmin()
     {
      console.log(this.adDetail);
      this.adObj.adminId=this.adDetail.value.adminId;
      this.adObj.adminName=this.adDetail.value.adminName;
      this.adObj.phoneNumber=this.adDetail.value.phoneNumber;
      this.adObj.emailId=this.adDetail.value.emailId;
      this.adObj.password=this.adDetail.value.password;
     
     
       
      this.adService.addAdmin(this.adObj).subscribe(res=>{
        console.log(res);
        this.getAllAdmins();
      },err=>{
        console.log(err);
      });
    }
  }
