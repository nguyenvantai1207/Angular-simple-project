import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private API_URL = 'https://65edc41d08706c584d9a8a28.mockapi.io/employees';

  constructor(private http: HttpClient) {}

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.API_URL}/${id}`);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL);
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.API_URL, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee) {
    return this.http.put(`${this.API_URL}/${id}`, employee);
  }
}
