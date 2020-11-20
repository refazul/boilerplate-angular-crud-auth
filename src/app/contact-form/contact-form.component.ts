import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../types';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @Input() buttonText = '';

  @Input() contact = { name: '', address: '', phone: '' };

  @Output() onSubmit = new EventEmitter<any>();

  constructor() { }

  onButtonClicked(): void {
    this.onSubmit.emit(this.contact);
  }
}