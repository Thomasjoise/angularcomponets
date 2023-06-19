import { Component } from '@angular/core';

@Component({
  selector: 'app-nav', //selector as tag
  // [app-nav] = selector ass attribute and .app-nav = selector as css
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  sitename: string='shoppkeeper';

}
