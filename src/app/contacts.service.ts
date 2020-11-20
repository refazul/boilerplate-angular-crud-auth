import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Contact } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
const httpOptionsWithAuthToken = (token: string = '') => ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'AuthToken': token,
  })
});

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  model = 'contact';
  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth
  ) { }

  get_all(): Observable<Contact[]> {
    return new Observable<Contact[]>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          if (user && token) {
            this.http.get<Contact[]>(`/api/${this.model}s`, httpOptionsWithAuthToken(token))
              .subscribe((contacts) => observer.next(contacts));
          }
        });
      });
    });
  }
  get_one(id: string): Observable<Contact> {
    return new Observable<Contact>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          if (user && token) {
            this.http.get<Contact>(`/api/${this.model}s/${id}`, httpOptionsWithAuthToken(token))
              .subscribe((contact) => observer.next(contact));
          }
        });
      });
    });
  }
  create_one(args): Observable<Contact> {
    return new Observable<Contact>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          if (user && token) {
            this.http.post<Contact>(`/api/${this.model}s`, { ...args }, httpOptionsWithAuthToken(token))
              .subscribe((contact) => observer.next(contact));
          }
        });
      });
    });
  }
  edit_one(args): Observable<Contact> {
    const { id, ...others } = args;
    return new Observable<Contact>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          if (user && token) {
            this.http.post<Contact>(`/api/${this.model}s/${id}`, { ...others }, httpOptionsWithAuthToken(token))
              .subscribe((contact) => observer.next(contact));
          }
        });
      });
    });
  }
  delete_one(id: string): Observable<any> {
    return new Observable<any>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          if (user && token) {
            this.http.delete<any>(`/api/${this.model}s/${id}`, httpOptionsWithAuthToken(token))
              .subscribe(() => observer.next());
          }
        });
      });
    });
  }
}