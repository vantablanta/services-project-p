import { Injectable } from '@angular/core';
import { Goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GetGoalListService {
  getGoals(){
    return Goals
  }

  constructor() { }
}
