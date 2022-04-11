import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MarkDoneService {

  doneMesage(text: string) {
    confirm(text)
  }

  constructor() { }
}
