import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from './../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
	MatCardModule,
	MatIconModule,
	MatPaginatorModule,
	MatTableModule,
	MatButtonModule,
} from '@angular/material';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@NgModule({
	imports: [
		CommonModule,
		EmployeesRoutingModule,
		SharedModule,
		MatCardModule,
		MatIconModule,
		MatPaginatorModule,
		MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
	],
	declarations: [ EmployeeListComponent, CreateEmployeeComponent ],
})
export class EmployeesModule {}
