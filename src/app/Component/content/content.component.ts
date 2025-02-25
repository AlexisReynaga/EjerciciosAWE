import { Component } from '@angular/core';
import { NameListComponent } from '../name-list/name-list.component';

@Component({
  selector: 'app-content',
  imports: [NameListComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
