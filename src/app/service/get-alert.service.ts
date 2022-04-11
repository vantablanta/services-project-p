import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAlertService {

  sendMessage(message:string){
    alert(message)
  }

  constructor() { }
}
