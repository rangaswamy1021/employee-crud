import { EmployeeRequests } from './../employees/models/employeerequests';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {


  singleEmployee: EmployeeRequests = <EmployeeRequests>{};
  employees: any;

  constructor(private activeRoute: ActivatedRoute, private employeeService: EmployeeService) {

  }

  ngOnInit() {
    debugger
    this.getEmployeeData();
    const id = +this.activeRoute.snapshot.params['id'];
    this.singleEmployee = this.employeeService.getServer(id);
    this.activeRoute.params.subscribe((params: Params) => {
      this.singleEmployee = this.employeeService.getServer(+params['id']);
    })

  }
  getEmployeeData() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;

    })
  }

}
