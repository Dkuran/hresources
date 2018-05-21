import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
	// { path: '', component: HomeComponent, children: [
	//   {path: 'employee', component: EmployeeComponent}
	// ]}

	{
		path: '',
    component: HomeComponent,
		children: [
			{
				path: 'employee',
				loadChildren: 'app/dashboard/employees/employees.module#EmployeesModule',
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class DashboardRoutingModule {}
