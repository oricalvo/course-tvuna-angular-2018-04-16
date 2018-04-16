import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor(route: ActivatedRoute, private contactService: ContactService) {
    const contactId = route.snapshot.params.id;

    this.contactService.loadContact(contactId);
  }

  ngOnInit() {
  }

  get contact() {
    return this.contactService.selectedContact;
  }
}
