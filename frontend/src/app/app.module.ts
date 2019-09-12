import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';

import { Injectable } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
