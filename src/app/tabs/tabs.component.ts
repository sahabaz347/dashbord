import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  constructor(private router: Router) {}

  changeBookmarks() {
    alert(122);
    console.log(3452345);
    this.router.navigate(['/bookmarks']);
  }
}
