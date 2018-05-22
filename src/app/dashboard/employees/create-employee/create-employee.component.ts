import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './../../../shared/employee.interface';
import { ResourcesService } from './../../../shared/service/resources.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-create-employee',
	templateUrl: './create-employee.component.html',
	styleUrls: [ './create-employee.component.scss' ]
})
export class CreateEmployeeComponent implements OnInit {
  public employeeForm: FormGroup;
  public edit = false;
  private url = 'api/employee';
  public employeeId: number;
	public newEmployee: Employee = {
		name: '',
		company: '',
		age: 0,
		birthday: '',
		color: ''
	};

	constructor(
		private _router: Router,
		private fb: FormBuilder,
		private _resourceService: ResourcesService,
		private _route: ActivatedRoute
	) {}

	ngOnInit() {
		console.log('create??');
		this._route.params.subscribe((params) => {
			if (params.id !== '') {
        this.employeeId = params.id;
        this.obtainEmployee(params.id);
        this.edit = true;
			}
		});
		// this.obtainEmployee();
		this.employeeForm = this.fb.group({
			name: new FormControl(null, [ Validators.required ]),
			company: new FormControl(null, [ Validators.required ]),
			age: new FormControl(null, [ Validators.required ]),
			birthday: new FormControl(null, [ Validators.required ]),
			color: new FormControl(null, [ Validators.required ])
		});
	}

	resetForm() {
		this.employeeForm.reset({
			name: this.newEmployee.name,
			company: this.newEmployee.company,
			age: this.newEmployee.age,
			birthday: new Date(this.newEmployee.birthday).toISOString().substring(0, 10),
			color: this.newEmployee.color
		});
	}

	obtainEmployee(id) {
		this._resourceService.getResource(this.url, id).subscribe((employee) => {
			console.log(employee);
			this.newEmployee = employee;
			this.resetForm();
		});
	}

	createEmployee() {
		// console.log(this.employeeForm);
		this.newEmployee.name = this.employeeForm.controls.name.value;
		this.newEmployee.company = this.employeeForm.controls.company.value;
		this.newEmployee.age = this.employeeForm.controls.age.value;
		this.newEmployee.birthday = this.employeeForm.controls.birthday.value;
		this.newEmployee.color = this.employeeForm.controls.color.value;
		this._resourceService.saveResource(this.url, this.newEmployee).subscribe((response) => {
			this._router.navigate([ '/home/employee' ]);
		});
  }

  editEmployee() {
    // console.log(this.employeeForm);
    // this.newEmployee.id = this.employeeId;
		this.newEmployee.name = this.employeeForm.controls.name.value;
		this.newEmployee.company = this.employeeForm.controls.company.value;
		this.newEmployee.age = this.employeeForm.controls.age.value;
		this.newEmployee.birthday = this.employeeForm.controls.birthday.value;
		this.newEmployee.color = this.employeeForm.controls.color.value;
		this._resourceService.editResource(this.url, this.newEmployee).subscribe((response) => {
			this._router.navigate([ '/home/employee' ]);
		});
  }
}
