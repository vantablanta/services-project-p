import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './component/about/about.component';
import { GoalsComponent } from './component/goals/goals.component';
import { QuoteComponent } from './component/quote/quote.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'goals/:id', component: GoalsComponent },
  { path: 'quotes', component: QuoteComponent },
  { path: '', redirectTo:"/goals", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
