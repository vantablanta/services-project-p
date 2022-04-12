import { Component, OnInit } from '@angular/core';

import { GoalsClass } from 'src/app/goals-class'

import { Router } from '@angular/router';


import { GetGoalListService } from 'src/app/service/get-goal-list.service';
import { GetAlertService } from 'src/app/service/get-alert.service';
import { MarkDoneService } from 'src/app/service/mark-done.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  faTrash = faTrash
  faCheck = faCheck
  faEye = faEye

  goals!: GoalsClass[]
  alerts!: GetAlertService
  goalDone! : MarkDoneService

  constructor(goalService: GetGoalListService, alertService: GetAlertService, doneService: MarkDoneService  ) {
    this.goals = goalService.getGoals()
    this.alerts = alertService
    this.goalDone = doneService
  }

  
  deleteGoal(index:number){
        this.goals.splice(index,1)
        this.alerts.sendMessage("Do you wish to delete")
  }
  router!:Router
  
  view(index:number){
    this.router.navigate(['/goals',index])
  }

  complete(index: number) {
    this.goals[index].complete = true

    // find out how to knwo if confirm was tru or false 
    // this.goalDone.doneMesage("CO")
    //  if(){
    //    this.goals[index].complete  =true
    //    console.log(this.goals[index].complete )
  }



  ngOnInit(): void {
  }

}
