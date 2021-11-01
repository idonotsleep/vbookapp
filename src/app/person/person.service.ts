import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Person } from "./person.model"

@Injectable({providedIn: 'root'})
export class PersonService {

    baseURL: String = 'http://localhost:3000'
    persons: Person[] = []

    constructor(private httpClient: HttpClient) {
      this.httpGetPersons()
    }

    public async fetchData(){
      const data = await this.httpClient.get<Person[]>(this.baseURL + '/employees').toPromise();
      console.log("Data: " + data);
      this.persons = data
      console.log(this.persons)
    }

    public httpGetPersons() {
        this.httpClient.get<Person[]>(this.baseURL + '/employees')
        .subscribe(
          (response) => {
            console.log('response received')
            this.persons = response;
            console.log('persons')
            console.log(this.persons)
          },
          (error) => {
            console.error('Request failed with error')
            alert(error);
          },
          () => {
            console.log('Request completed')
          })

    }

    public getPersons(): Person[]  {
      return this.persons;
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
