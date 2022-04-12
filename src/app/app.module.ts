import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './component/goals/goals.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuoteComponent } from './component/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
