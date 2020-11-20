import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../types';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact = { id: '', name: '', address: '', phone: '', photoUrl: '' }
  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.contactsService.get_one(id)
      .subscribe(contact => this.contact = contact);
  }

  onDeleteClick(id): void {
    this.contactsService.delete_one(id)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}