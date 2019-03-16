import { Component } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular7';

  public toggleTitle(){
    console.log("Le has dado click al boton");

    $(".title").slideToggle();
  }
}
