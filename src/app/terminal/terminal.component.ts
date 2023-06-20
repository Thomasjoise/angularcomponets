
import { Component } from '@angular/core';
import { NotificationCommandService } from '../shared/notification-command.service.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})

export class TerminalComponent {
  command: string ='';
  closenotificationbar: boolean = true;
  errorMessage: string = '';
  displayterminal:boolean = false;
  constructor(private notificationCommandService: NotificationCommandService) {}

  executeCommand() {
    this.notificationCommandService.sendCommand(this.command);
    if (this.command === 'off') {
      this.closenotificationbar = false;
    } else if (this.command === 'on') {
      this.closenotificationbar = true;
    } else {
      // Handle other commands or display an error message
    }
    console.log('Command executed:', this.command);
    this.command = '';
  }
  // executeCommand() {
    
  //   if (this.command === 'off') {
  //     this.closenotificationbar = false;
  //   } else if (this.command === 'on') {
  //     this.closenotificationbar = true;
  //   } else {
  //     // Handle other commands or display an error message
  //   }
  //   console.log('Command executed:', this.command);

  //   this.command = ''; // Clear the command input
  // }
  
  handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.command = inputElement.value;
  }

}

