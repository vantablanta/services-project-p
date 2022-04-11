import { Component, OnInit } from '@angular/core';

import { GoalsClass } from 'src/app/goals-class'


import { GetGoalListService } from 'src/app/service/get-goal-list.service';
import { GetAlertService } from 'src/app/service/get-alert.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  faTrash = faTrash

  goals!: GoalsClass[]
  alerts!: GetAlertService

  deleteGoal(index:number){
        this.goals.splice(index,1)
        this.alerts.sendMessage("Do you wish to delete")
  }

  constructor(goalService: GetGoalListService, alertService: GetAlertService) {
    this.goals = goalService.getGoals()
    this.alerts = alertService
  }

  ngOnInit(): void {
  }

}
