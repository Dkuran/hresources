import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
    component: HomeComponent,
		children: [
			{
				path: 'employee',
				loadChildren: 'app/dashboard/employees/employees.module#EmployeesModule',
      },
      {
				path: 'project',
				loadChildren: 'app/dashboard/projects/projects.module#ProjectsModule',
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class DashboardRoutingModule {}
