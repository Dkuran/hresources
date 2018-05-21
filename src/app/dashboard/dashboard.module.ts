import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';


import {
	MatMenuModule,
	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatSidenavModule,
	MatToolbarModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';


@NgModule({
	imports: [
		CommonModule,
		DashboardRoutingModule,
		MatMenuModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatSidenavModule,
		MatToolbarModule,
    MatListModule,
    MatGridListModule
	],
	declarations: [ HomeComponent ]
})
export class DashboardModule {}
