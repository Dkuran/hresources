import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from './../../../shared/projet.interface';
import { ResourcesService } from './../../../shared/service/resources.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrls: ['./manage-project.component.scss']
})
export class ManageProjectComponent implements OnInit {
  public projectForm: FormGroup;
  public edit = false;
  private url = 'api/project';
  public projectId: number;
	public newProject: Project = {
		name: '',
		teamSize: 0,
		client: '',
  };

  constructor(
    private _router: Router,
		private fb: FormBuilder,
		private _resourceService: ResourcesService,
		private _route: ActivatedRoute
  ) { }

  ngOnInit() {
		this._route.params.subscribe((params) => {
			if (params.id !== '') {
        this.projectId = params.id;
        this.obtainProject(params.id);
        this.edit = true;
			}
		});
		this.projectForm = this.fb.group({
			name: new FormControl(null, [ Validators.required ]),
			teamSize: new FormControl(null, [ Validators.required ]),
			client: new FormControl(null, [ Validators.required ])
		});
  }

  resetForm() {
		this.projectForm.reset({
			name: this.newProject.name,
			teamSize: this.newProject.teamSize,
			client: this.newProject.client,
		});
  }

  obtainProject(id) {
		this._resourceService.getResource(this.url, id).subscribe((project) => {
			console.log(project);
			this.newProject = project;
			this.resetForm();
		});
  }

  createProject() {
		// console.log(this.employeeForm);
		this.newProject.name = this.projectForm.controls.name.value;
		this.newProject.teamSize = this.projectForm.controls.teamSize.value;
		this.newProject.client = this.projectForm.controls.client.value;
		this._resourceService.saveResource(this.url, this.newProject).subscribe((response) => {
			this._router.navigate([ '/home/project' ]);
		});
  }

  editProject() {
		// console.log(this.employeeForm);
		this.newProject.name = this.projectForm.controls.name.value;
		this.newProject.teamSize = this.projectForm.controls.teamSize.value;
		this.newProject.client = this.projectForm.controls.client.value;
		this._resourceService.editResource(this.url, this.newProject).subscribe((response) => {
			this._router.navigate([ '/home/project' ]);
		});
  }

}

