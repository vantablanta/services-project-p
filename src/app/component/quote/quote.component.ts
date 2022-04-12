import { Component, OnInit } from '@angular/core';
import { QuoteClass } from 'src/app/quote-class';

import { QuoteServiceService } from 'src/app/service/quote-service.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes!: QuoteClass

  constructor(private quoteService: QuoteServiceService) { 
  }

  ngOnInit() {
    this.quoteService.quoteRequest()
    this.quotes = this.quoteService.quotes

    // interface ApiResponse{
    //   author:string;
    //   quote:string;
    // }
    // this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(
      
    //   data => {
    //   // Succesful API request
    //   this.quotes = new QuoteClass(data.author, data.quote)
    // },err => {
    //     this.quotes = new QuoteClass("Winston Churchill","Never never give up!")
    //     console.log("An error occurred")
    // })

  }


}
