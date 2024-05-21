import { Component, Input } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrl: './person-item.component.scss'
})
export class PersonItemComponent {
  @Input() person: Person;
}
