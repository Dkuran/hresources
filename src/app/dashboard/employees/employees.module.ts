import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from './../../shared/shared.module';

import { MatCardModule, MatIconModule, MatPaginatorModule, MatTableModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		EmployeesRoutingModule,
		SharedModule,
		MatCardModule,
		MatIconModule,
		MatPaginatorModule,
		MatTableModule
	],
	declarations: [ EmployeeListComponent ]
})
export class EmployeesModule {}
