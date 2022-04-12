import { Injectable } from '@angular/core';
import { QuoteClass } from '../quote-class';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class QuoteServiceService {
  quotes!: QuoteClass

  constructor(private http: HttpClient) {
    this.quotes = new QuoteClass("","");
  }
  
  quoteRequest(){
    interface ApiResponse{
      quote:string;
      author:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).subscribe(data => {
        this.quotes.quote = data.quote
        this.quotes.author = data.author
       resolve(data)
      },
        error => {
          this.quotes.quote = "Never, never, never give up"
          this.quotes.author = "Winston Churchill"
          reject(error)
        })
      })
      return promise   
  }



}



