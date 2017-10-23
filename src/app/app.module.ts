import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgMaterialModule } from './ng-material/ng-material.module';
import {ItsecurityModule} from './itsecurity/itsecurity.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMaterialModule,
    AppRoutingModule,
    ItsecurityModule,
    DashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
