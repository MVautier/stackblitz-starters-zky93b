import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Person } from "../models/person.model";
import { Observable, firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PersonService {

  constructor(private http: HttpClient) {
  }

  getData(): Promise<Person[]> {
    return firstValueFrom(this.http.get<Person[]>("/assets/data/persons.json"));
  }
}
