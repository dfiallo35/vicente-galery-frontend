import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GaleryCardListComponent } from "./components/galery-card-list/galery-card-list.component";
import { GaleryCardComponent } from "./components/galery-card/galery-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GaleryCardListComponent, GaleryCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'galery';
}
