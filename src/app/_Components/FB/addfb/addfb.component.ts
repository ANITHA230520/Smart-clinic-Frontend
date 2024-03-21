import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FeedBack } from 'src/app/_Models/feed-back.model';
import { FeedBackService } from 'src/app/_Services/feed-back.service';

@Component({
  selector: 'app-addfb',
  templateUrl: './addfb.component.html',
  styleUrls: ['./addfb.component.css']
})
export class AddfbComponent implements OnInit {
  feedDetail !:FormGroup;
  feeObj : FeedBack=new FeedBack();
  feeList : FeedBack[]= []
constructor(private formBuilder: FormBuilder , private feeService :FeedBackService){}

ngOnInit(): void {
  this.getAllFeedBack();
  this.feedDetail = this.formBuilder.group({
    feedBackId:[''],
    rating: [''],
    comments: [''],
    patientId: [''],
    doctorId: [''],
});
}
  getAllFeedBack() {
    this.feeService.getAllFeedBack().subscribe(res=>{
      this.feeList=res;
    },err=>{
      console.log("error while fetching data");
    })
  }
addFeedback()
   {
    alert('addmethod');
    console.log(this.feedDetail);
    this.feeObj.feedBackId=this.feedDetail.value.feedBackId;
    this.feeObj.rating=this.feedDetail.value.rating;
    this.feeObj.comments=this.feedDetail.value.comments;
    this.feeObj.patientId=this.feedDetail.value.patientId;
    this.feeObj.doctorId=this.feedDetail.value.doctorId;

    this.feeService.addFeedBack(this.feeObj).subscribe((res:any)=>{
    console.log(res);
    },(err: any)=>{
     console.log(err);
    });

  }

}
