import { Component, OnInit } from '@angular/core';

import { GoalsClass } from 'src/app/goals-class'
import { GetGoalListService } from 'src/app/service/get-goal-list.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  faTrash = faTrash

  goals!: GoalsClass[]
  constructor(service: GetGoalListService) {
    this.goals = service.getGoals()
  }

  ngOnInit(): void {
  }

}
