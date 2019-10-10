import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'css-grid-angular-tut';

  gridBuilder = {
    'grid-template-columns': 'repeat(6, 1fr)',
  }


}
