import { Injectable } from '@angular/core';
import { FeedBack} from '../_Models/feed-back.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {
  baseURL : string;
  getURL :string;
  constructor(private http:HttpClient) {
    this.baseURL="http://localhost:8080/api/feedBacks/feedBack";
    this.getURL ="http://localhost:8080/api/feedBacks"
  }

  addFeedBack(app : FeedBack): Observable<FeedBack>{
    return this.http.post<FeedBack>(this.baseURL,app);
   }

   getAllFeedBack(): Observable<FeedBack[]>{
    return this.http.get<FeedBack[]>(this.getURL);

   }
}


