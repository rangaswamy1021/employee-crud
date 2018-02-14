import { EmployeeRequests } from './employees/models/employeerequests';
import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  employees:  EmployeeRequests[];

  apiURL = 'http://localhost:3000/Employees/';

  constructor(private http: Http) {

  }

  getServer(id: number) {
    debugger
    const singleEmployee = this.employees.find(
      (e) => {
        return e.id == id;
      }
    );
    return singleEmployee;
  }


  getEmployees(): Observable<any> {
    return this.http.get(this.apiURL).map(res => {
      return this.employees = res.json();
    })
  }

  createEmployee(objemployee: EmployeeRequests): Observable<any> {
    // let obj = JSON.stringify(objemployee)
    return this.http.post(this.apiURL, objemployee).map(res =>  res )
  }

  updateEmployee(empId: number, createEmployee: EmployeeRequests): Observable<any> {
    debugger
   return this.http.put(this.apiURL + empId, createEmployee).map(res => res);
  }

  deleteEmployee(empId: number): Observable<any> {
    return this.http.delete(this.apiURL + empId).map(res => res);
  }

}
