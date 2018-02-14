import { EmployeeRequests } from './models/employeerequests';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  empRequest2: any;
  allEmployeeData: any;
  selectedempId: any;
  newEmpForm: boolean;
  user: any;
  empForm: FormGroup;
  employees: any[];
  createEmployee: EmployeeRequests = <EmployeeRequests>{};
  empRequest: EmployeeRequests = <EmployeeRequests>{};
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.empForm = new FormGroup({
      'fName': new FormControl('', Validators.required),
      'lastName': new FormControl('', [Validators.required]),
      'jobTitleName': new FormControl('', [Validators.required]),
      'phoneNumber': new FormControl('', [Validators.required]),
      'emailAddress': new FormControl('', [Validators.required]),
      'employeeCode': new FormControl('', [Validators.required]),
    })
    this.getEmployeesData();
    // this.createNewEmployee()
  }

  patchValueData(employeeData) {
    debugger
    this.empForm.patchValue({
      'fName': employeeData.firstName,
      'lastName': employeeData.lastName,
      'jobTitleName': employeeData.jobTitleName,
      'phoneNumber': employeeData.phoneNumber,
      'emailAddress': employeeData.emailAddress,
      'employeeCode': employeeData.employeeCode,
    });
  }

  getEmployeesData() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;
      console.log(this.employees)
    })
  }

  addEmployee() {
    debugger;
    this.empRequest = <EmployeeRequests>{};
    this.empRequest.firstName = this.empForm.controls['fName'].value;
    this.empRequest.lastName = this.empForm.controls['lastName'].value;
    this.empRequest.jobTitleName = this.empForm.controls['jobTitleName'].value;
    this.empRequest.phoneNumber = this.empForm.controls['phoneNumber'].value;
    this.empRequest.emailAddress = this.empForm.controls['emailAddress'].value;
    this.empRequest.employeeCode = this.empForm.controls['employeeCode'].value;
    this.employeeService.createEmployee(this.empRequest).subscribe(res => {
      console.log(res);
      this.getEmployeesData();
      this.empForm.reset();
      this.newEmpForm = false;
    })
  }

  updateEmployee(empForm) {
    debugger
    this.empRequest = <EmployeeRequests>{};
    this.empRequest.firstName = this.empForm.controls['fName'].value;
    this.empRequest.lastName = this.empForm.controls['lastName'].value;
    this.empRequest.jobTitleName = this.empForm.controls['jobTitleName'].value;
    this.empRequest.phoneNumber = this.empForm.controls['phoneNumber'].value;
    this.empRequest.emailAddress = this.empForm.controls['emailAddress'].value;
    this.empRequest.employeeCode = this.empForm.controls['employeeCode'].value;
    this.employeeService.updateEmployee(this.selectedempId.id, this.empRequest).subscribe(res => {
      console.log(res);
      this.getEmployeesData();
      this.empForm.reset();
      this.newEmpForm = false;
    })

  }

  empDelete(empId: number) {
    debugger
    if (confirm("Are you sure you want to delete?")) {
      this.employeeService.deleteEmployee(empId).subscribe(res => {
        console.log(res);
        this.getEmployeesData();
      })
    }
  }



  newEmployeeButton() {
    this.newEmpForm = true;
    this.empForm.reset();
  }

  updateEmployee1(employeeData: any) {
    debugger
    this.newEmpForm = true;
    this.selectedempId = employeeData;
    this.patchValueData(employeeData);
  }

  cancelbtn() {
    this.newEmpForm = false;
    this.empForm.reset();
  }

}
