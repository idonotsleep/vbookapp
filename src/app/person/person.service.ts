import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Person } from "./person.model"

@Injectable({providedIn: 'root'})
export class PersonService {

    baseURL: String = 'http://localhost:3000'
    persons: Person[] = []

    constructor(private httpClient: HttpClient) {}

    public getPersons(): Observable<any> {
      return this.httpClient.get<Person[]>(this.baseURL + '/employees')
    }

    public removePerson(id: number): Observable<any>   {
      const headers = { 'content-type': 'application/json'}
      return this.httpClient.delete(this.baseURL + '/employees/' + id, {'headers':headers})
    }

    public addPerson(person:Person): Observable<any> {
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(person);
      return this.httpClient.post(this.baseURL + '/employees', body, {'headers':headers})
    }

}
