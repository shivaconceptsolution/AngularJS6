import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  c
  
  fun(data)
  {
   this.c =parseInt(data.a) + parseInt(data.b);
  }
}
