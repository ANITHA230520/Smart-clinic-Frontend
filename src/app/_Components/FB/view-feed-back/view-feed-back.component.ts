import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FeedBack } from 'src/app/_Models/feed-back.model';
import { FeedBackService } from 'src/app/_Services/feed-back.service';

@Component({
  selector: 'app-view-feed-back',
  templateUrl: './view-feed-back.component.html',
  styleUrls: ['./view-feed-back.component.css']
})
export class ViewFeedBackComponent implements OnInit{
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

}
