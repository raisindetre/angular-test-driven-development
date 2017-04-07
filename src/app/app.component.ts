import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments:Array<any>;
  title = 'app works!';

  constructor() {
    this.comments = [];
  }

  add(comment) {
    var commentObj = { title: comment, likes: 0};
    this.comments.unshift(commentObj);
  }

  like(comment){
    comment.likes++;
  }
}
