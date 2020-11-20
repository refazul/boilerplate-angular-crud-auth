import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../types';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(
    private ContactsService: ContactsService
  ) { }

  ngOnInit(): void {
    this.ContactsService.get_all()
      .subscribe(contacts => this.contacts = contacts);
  }

}