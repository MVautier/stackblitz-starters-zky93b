import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GenerationConfig } from '../models/generation-config.model';

@Component({
  selector: 'app-person-generator',
  templateUrl: './person-generator.component.html',
  styleUrl: './person-generator.component.scss',
})
export class PersonGeneratorComponent implements OnInit {
  @Output()
  private generateRequest = new EventEmitter<GenerationConfig>();
  generator: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.generator = this.formBuilder.group({
      count: [10],
      male: [true],
      female: [true],
    });
  }

  generate() {
    const value: GenerationConfig = this.generator.value;
    if (this.generator.valid) this.generateRequest.emit(value);
  }
}
