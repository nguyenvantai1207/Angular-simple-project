import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  formatEmail(email: string): string {
    if (!email) return '';
    return email.includes('@') ? email : `${email}@example.com`;
  }
}
