import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from "./components/grid/grid.component";
import { MenubarComponent } from "./components/menubar/menubar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridComponent, MenubarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webapp';
}
