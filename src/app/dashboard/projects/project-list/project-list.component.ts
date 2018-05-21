import { Component, OnInit } from '@angular/core';
import { ResourcesService } from './../../../shared/service/resources.service';
import { Project } from './../../../shared/projet.interface';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
	public projectSource: MatTableDataSource<Project>;
	public projectColumns = [ 'name', 'teamSize', 'client', 'actions'];
	public projectData: any[] = undefined;
	private url = 'api/project';

  constructor(
    private _resourceService: ResourcesService
  ) { }

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects() {
		this._resourceService.fetchResources(this.url).subscribe((response) => {
			this.projectData = response;
			this.projectSource = new MatTableDataSource<Project>(this.projectData);
		});
	}

	deleteProject(project) {
		console.log(project);
		this._resourceService.deleteResource(this.url, project.id).subscribe((response) => {
      this.fetchProjects();
		});
  }

  createProject() {

  }

}
