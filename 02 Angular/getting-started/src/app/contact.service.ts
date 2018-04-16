import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
  contacts: Contact[];
  selectedContact: Contact;

  constructor() {
    this.contacts = [
      {id: 1, name: "Ori"},
      {id: 2, name: "Roni"},
    ];

    this.selectedContact = null;
  }

  loadAll() {
  }

  loadContact(id: number) {
    const contact = this.contacts.find(c=>c.id==id);
    if(!contact) {
      throw new Error("Contact with id " + id + " was not found");
    }

    this.selectedContact = contact;
  }
}

export interface Contact {
  id: number;
  name: string;
}
