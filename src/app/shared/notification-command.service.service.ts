import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotificationCommandService {
  private commandSubject = new Subject<string>();
  command$ = this.commandSubject.asObservable();

  sendCommand(command: string) {
    this.commandSubject.next(command);
  }
}

