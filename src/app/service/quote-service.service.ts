import { Injectable } from '@angular/core';
import {Quotes} from "src/app/quote-list"; 


@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {
  getQuotes(){
    return Quotes
  }

  constructor() { 

  }
}
