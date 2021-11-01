import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, FormGroup } from '@angular/forms';
import { Person } from './person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  // Dependency injection: inject form builder, inject the person service
  constructor(private formBuilder: FormBuilder, private personService: PersonService) { }
  ngOnInit(): void {
    this.form = false

    //build form with validation
    this.personForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(5)]],
      ic_number: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("^S[0-9]{7}[a-zA-Z]{1}$")]],
      age: ['', [Validators.required, ]],
      job_title: ['', [Validators.required]],
      department: ['', [Validators.required]]
    })

    // Retrieve all data immediately after the SPA is loaded
    this.load()
  }

  //personService is injected
  employees: Person[] = []

  form: boolean = false
  submitted: boolean = false
  personForm: any

  load() {
    this.personService.getPersons()
    .subscribe(
      (response) => {
        console.log('response received')
        this.employees = response;
      },
      (error) => {
        console.error('Request failed with error')
        alert(error);
      },
      () => {
        console.log('Request completed')
      })
  }

  onReset() {
    this.submitted = false;
    this.personForm.reset();
  }

  // Toggle visibility of form
  show_form(){
    this.form = (this.form) ? false : true
  }

  hide_form(){
    this.form = false
  }

  add() {
    // this is how to get the submitted parameters
    let person_input = this.personForm.value
    this.submitted = true
    if (this.personForm.invalid) {
      console.log(this.personForm)
      return;
    }

    this.personService.addPerson(person_input)
    .subscribe(
      (response) => {
        this.employees.push(new Person(response.id, response.name, response.ic_number, response.age, response.job_title, response.department))
      },
      (error) => {
        console.error('Request failed with error')
        alert(error); // probably can improve this
      },
      () => {
        console.log('Request completed')
      })
  }

  remove(id: number): void{

    this.personService.removePerson(id)
    .subscribe(
      (response) => {
        console.log('person removed')
      },
      (error) => {
        console.error('Request failed with error')
        alert(error);
      },
      () => {
        console.log('Request completed')
      })
      for(let i = 0; i < this.employees.length; ++i){
        if (this.employees[i].id === id) {
            this.employees.splice(i,1);  // at position i, remove 1 item
        }
      }

  }
}
