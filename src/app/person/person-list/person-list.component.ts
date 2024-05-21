import { Component } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Person } from '../models/person.model';
import { PersonService } from '../services/person.service';
import { GenerationConfig } from '../models/generation-config.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss',
})
export class PersonListComponent {
  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  generate(config: GenerationConfig) {
    this.personService.getData().then(data => {
      this.persons = data.slice(0, config.count);
      console.log('data: ', this.persons);
    });
  }
}
