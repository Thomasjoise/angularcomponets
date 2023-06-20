import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notificaton/notificaton.component';
import { SearchComponent } from './search/search.component';
import { TerminalComponent } from './terminal/terminal.component';
import { FormsModule } from '@angular/forms';
import { NotificationCommandService } from './shared/notification-command.service.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [NotificationCommandService],
  bootstrap: [AppComponent],
})
export class AppModule { }

