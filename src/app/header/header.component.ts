import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan: string='Your one shop stop for evrything.';
  source: string='/assets/shopping.jpeg';
  newslogan(){
    return 'this is a new slogan fro WEB.';
  }

}
