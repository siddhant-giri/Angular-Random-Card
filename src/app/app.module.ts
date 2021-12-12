import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//for http
import { HttpClientModule } from "@angular/common/http"

//for ng toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

//font awesome
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
