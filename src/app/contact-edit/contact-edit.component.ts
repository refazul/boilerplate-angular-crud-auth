import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../types';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact: Contact = { id: '', name: '', address: '', phone: '', photoUrl: '' }
  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.contactsService.get_one(id)
      .subscribe(contact => this.contact = contact);
  }

  onSubmit(args): void {
    this.contactsService.edit_one(args)
      .subscribe((contact) => {
        this.contact = contact;
        this.router.navigateByUrl('/contacts/' + this.contact.id);
      });
  }
}