import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { EmailService } from '../../../services/email.service';

@Component({
  selector: 'app-employee-create',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css',
})
export class EmployeeCreateComponent {
  addEmployeeForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private emailService: EmailService
  ) {
    this.addEmployeeForm = this.formBuilder.group({
      name: [''],
      dob: [''],
      email: [''],
      position: [''],
      department: [''],
    });
  }

  onSubmit() {
    const formValue = this.addEmployeeForm.value;
    const newEmployee = {
      ...formValue,
      email: this.emailService.formatEmail(formValue.email),
    };
    this.employeeService.createEmployee(newEmployee).subscribe({
      next: (res) => {
        this.router.navigateByUrl('');
      },
      error: (err) => console.error('Error creating employee:', err),
    });
  }

  onCancel() {
    this.router.navigateByUrl('');
  }
}
