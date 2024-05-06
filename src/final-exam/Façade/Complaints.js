export class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);

    return this.reply(complaint);
  }
}
