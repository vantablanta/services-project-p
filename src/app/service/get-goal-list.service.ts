import { Injectable } from '@angular/core';
import { Goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GetGoalListService {
  getGoals(){
    return Goals
  }
  getGoalId(id:number){
    for (let goal of Goals){
      if (goal.id == id){
        return goal;
      }
    }
    return Goals
  }
  constructor() { }
}
