import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { AdministrationModule } from './../administration/administration.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AdministrationModule
  ],
  declarations: [HomeComponent]
})
export class DashboardModule { }
