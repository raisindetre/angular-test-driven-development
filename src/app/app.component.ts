import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments:Array<string>;
  title = 'app works!';

  constructor() {
    this.comments = [];
  }

  add(comment) {
    this.comments.unshift(comment);
  }
}
