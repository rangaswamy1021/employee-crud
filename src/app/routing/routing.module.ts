import { EmployeeComponent } from './../employees/employee/employee.component';
import { LandingComponent } from './../landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from '../employees/employees.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';



const appRoutes:Routes = [
  { path:'', component: LandingComponent },
  { path:'employees', component: EmployeesComponent },
  { path:'employees/:id', component: EmployeeComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule{

}