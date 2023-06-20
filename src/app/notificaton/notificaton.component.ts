import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NotificationCommandService } from '../shared/notification-command.service.service';

@Component({
  selector: 'app-notificaton',
  templateUrl: './notificaton.component.html',
  styleUrls: ['./notificaton.component.css']
})

export class NotificationComponent implements OnInit {
  displaynotification: boolean = true;
  command: string = '';

  constructor(private notificationCommandService: NotificationCommandService) {}

  ngOnInit() {
    this.notificationCommandService.command$.subscribe(command => {
      this.command = command;
      // Handle turning off the notification tab or any other logic
    });
  }

  closenotificationbar(): void{
    this.displaynotification = true;
  }
}
// export class NotificatonComponent {
//   displaynotification:boolean = false;
//   displayterminal:boolean = false;

//   closenotificationbar(): void{
//     this.displaynotification = true;
//   }

// }

