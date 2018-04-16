let nextId = 0;

class Contact {
    constructor(name) {
        this.id = ++nextId;
        this.name = name;
    }

    print() {
        console.log(this.id + ", " + this.name);
    }
}

class ContactEx extends Contact {
    constructor(name) {
        super(name);
    }
}

const c1 = new ContactEx("Ori");
c1.print();

const c2 = new ContactEx("Roni");
c2.print();
