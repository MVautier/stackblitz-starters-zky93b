import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonGeneratorComponent } from './person-generator/person-generator.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonRoutingModule } from './person-routing.module';
import { PersonItemComponent } from './person-item/person-item.component';

@NgModule({
  declarations: [
    PersonGeneratorComponent,
    PersonListComponent,
    PersonItemComponent,
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
  ],
})
export class PersonModule {}
