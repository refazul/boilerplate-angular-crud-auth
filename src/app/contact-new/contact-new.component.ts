import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../types';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss']
})
export class ContactNewComponent implements OnInit {

  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(contact: Contact): void {
    this.contactsService.create_one(contact)
      .subscribe((contact) => {
        this.router.navigateByUrl('/contacts/' + contact.id);
      });
  }

}