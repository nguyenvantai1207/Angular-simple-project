import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPipe } from '../../../pipes/email.pipe';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, EmailPipe],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.employeeService.getAllEmployees().subscribe((res) => {
      this.employeeList = res;
    });
  }

  onView(id: number) {
    this.router.navigateByUrl(`detail/${id}`);
  }

  onCreate() {
    this.router.navigateByUrl('create');
  }

  onDelete(id: number) {
    console.log('Delete button clicked, ID:', id); // Add this
    this.employeeService.deleteEmployee(id).subscribe((res) => {
      this.fetchData();
      alert(`Employee deleted Successfully!`);
    });
  }

  onEdit(id: number) {
    this.router.navigateByUrl(`update/${id}`);
  }
}
