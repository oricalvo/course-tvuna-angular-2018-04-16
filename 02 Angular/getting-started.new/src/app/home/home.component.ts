import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Contact, ContactService} from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private contactService: ContactService) {
    this.contactService.loadAll();
  }

  get contacts() {
    return this.contactService.contacts;
  }

  gotoDetails(contact: Contact) {
    console.log(contact.name);

    this.router.navigate(["details", contact.id]);
  }
}
