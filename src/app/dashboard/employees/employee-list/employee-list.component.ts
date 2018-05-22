import { Component, OnInit } from '@angular/core';
import { ResourcesService } from './../../../shared/service/resources.service';
import { Employee } from './../../../shared/employee.interface';
import { MatTableDataSource } from '@angular/material';
import { CreateEmployeeComponent } from './../create-employee/create-employee.component';
// import { Router } from '@angular/router';

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: [ './employee-list.component.scss' ]
})
export class EmployeeListComponent implements OnInit {
	public employeeSource: MatTableDataSource<Employee>;
	public employeeColumns = [ 'name', 'company', 'age', 'birthday', 'color', 'actions' ];
	public employeeData: any[] = undefined;
  private url = 'api/employee';

	constructor(
    private _resourceService: ResourcesService,
    // private _router: Router
  ) {}

	ngOnInit() {
    this.fetchEmployees();
  }

	fetchEmployees() {
		this._resourceService.fetchResources(this.url).subscribe((response) => {
			this.employeeData = response;
			this.employeeSource = new MatTableDataSource<Employee>(this.employeeData);
		});
	}

	deleteEmployee(employee) {
		console.log(employee);
		this._resourceService.deleteResource(this.url, employee.id).subscribe((response) => {
      this.fetchEmployees();
		});
  }

}
