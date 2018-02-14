import { EmployeeService } from './../../employee.service';
import { EmployeeRequests } from './../models/employeerequests';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


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
