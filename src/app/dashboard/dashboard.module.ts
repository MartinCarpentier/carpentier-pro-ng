import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgMaterialModule} from '../ng-material/ng-material.module';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
