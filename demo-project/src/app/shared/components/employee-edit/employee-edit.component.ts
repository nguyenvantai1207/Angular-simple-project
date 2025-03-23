import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-edit',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css',
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee | undefined;

  updateEmployeeForm: FormGroup;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.updateEmployeeForm = this.formBuilder.group({
      name: [''],
      dob: [''],
      email: [''],
      position: [''],
      department: [''],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.employeeService.getEmployeeById(id).subscribe({
      next: (res) => {
        this.employee = res;
        this.updateEmployeeForm.patchValue({
          name: res.name,
          dob: res.dob,
          email: res.email,
          position: res.position,
          department: res.department,
        });
      },
      error: (err) => console.error('Error fetching employee: ', err),
    });

    this.updateEmployeeForm.setValue({
      name: this.employee?.name,
      dob: this.employee?.dob,
      email: this.employee?.email,
      position: this.employee?.position,
      department: this.employee?.department,
    });
  }

  onCancel() {
    this.router.navigateByUrl('');
  }

  onUpdate() {
    if (this.employee) {
      this.employeeService
        .updateEmployee(this.employee?.id, this.updateEmployeeForm.value)
        .subscribe({
          next: (res) => {
            this.router.navigateByUrl('');
          },
          error: (err) => console.error('Error Update Employee ', err),
        });
    } else {
      console.error('No employee data to update');
    }
  }
}
