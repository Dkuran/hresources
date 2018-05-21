import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';

// import { SharedModule } from './../shared/shared.module';

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
// import { DashboardComponent } from './dashboard/dashboard.component';

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
    // SharedModule
	],
	declarations: [ HomeComponent ]
})
export class DashboardModule {}
