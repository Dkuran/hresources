import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { SharedModule } from './../../shared/shared.module';

import { MatCardModule, MatIconModule, MatPaginatorModule, MatTableModule, MatButtonModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		ProjectsRoutingModule,
		MatCardModule,
		MatIconModule,
		MatPaginatorModule,
		MatTableModule,
		SharedModule,
		MatButtonModule
	],
	declarations: [ ProjectListComponent ]
})
export class ProjectsModule {}
