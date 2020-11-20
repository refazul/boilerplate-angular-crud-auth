import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full'},
  { path: 'contacts', component: ContactsComponent, pathMatch: 'full'},
  { path: 'contacts/new', component: ContactNewComponent, pathMatch: 'full'},
  { path: 'contacts/:id', component: ContactDetailComponent},
  { path: 'contacts/edit/:id', component: ContactEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
