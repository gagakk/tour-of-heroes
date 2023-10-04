import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = []; // <-- messages property

  // Add add() method to add a message to the cache.
  add(message: string) {
    this.messages.push(message);
  }

  // Add clear() method to clear the cache.
  clear() {
    this.messages = [];
  }

  constructor() { }
}
