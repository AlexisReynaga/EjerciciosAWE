import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';
import { CounterComponent } from './Component/counter/counter.component';
import { NameListComponent } from './Component/name-list/name-list.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ContentComponent } from './Component/content/content.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CounterComponent, NameListComponent,FooterComponent,ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio1';
}
