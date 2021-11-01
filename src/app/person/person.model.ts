export class Person {
  private _id:number = 0
  private _name: string
  private _ic_number: string
  private _age: number
  private _job_title: string
  private _department: string

  public get id(): number
  {
      return this._id;
  }

  public get name(): string
  {
      return this._name;
  }

  public set name(name: string) {
      this._name = name;
  }

  public get ic_number(): string
  {
      return this._ic_number;
  }

  public set ic_number(ic_number: string) {
      this._ic_number = ic_number;
  }

  public get age(): number
  {
      return this._age;
  }

  public set age(age: number) {
      this._age = age;
  }

  public get job_title(): string
  {
      return this._job_title;
  }

  public set job_title(job_title: string) {
      this._job_title = job_title;
  }

  public get department(): string {
      return this._department;
  }

  public set department(department: string) {
      this._department = department;
  }

  public constructor(name: string, ic_number: string, age: number, job_title: string, department: string) {
    this._name = name
    this._ic_number = ic_number
    this._age = age
    this._job_title = job_title
    this._department = department
  }

}
