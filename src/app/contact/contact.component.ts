import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  validateEmail(emailInput: HTMLInputElement): void {
    if (emailInput.value.trim() === '') {
      emailInput.style.border = '2px solid red';
      setTimeout(() => {
        emailInput.style.border = '';
      }, 2000);
    } else {
      emailInput.value = '';
      alert('Thank you for subscribing!');
    }
  }
}
