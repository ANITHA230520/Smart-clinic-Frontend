import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Admin } from 'src/app/_Models/admin.model';
import { AdminService } from 'src/app/_Services/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit{
  
    adDetail !:FormGroup;
    adObj : Admin=new Admin(); 
    adList : Admin[]= []
  constructor(private formBuilder: FormBuilder , private adService :AdminService){}
  
  ngOnInit(): void {
  
    this.getAllAdmins();  
    this.adDetail = this.formBuilder.group({
      adminId:['' ,Validators.required],
      adminName:['',Validators.minLength(5)],
      phoneNumber:['',Validators.required],
      emailId:['',Validators.required, Validators.email],
      password:['',Validators.required],

    });
  }
    
    addAdmin()
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
  
    getAllAdmins() {
      this.adService.getAllAdmins().subscribe(res=>{
        this.adList=res;
      },err=>{
        console.log("error while fetching data");
      })
    }
}
