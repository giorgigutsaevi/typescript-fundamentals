//! Abstract classes can't be instantiated, they only serve the 'blueprint' purpose!

abstract class Department {
  static fiscalYear = 2022;
  // private id: string;
  // private name: string;
  // private employees: string[] = [];

  /*
	👉 private properties are only accessible from inside the class they are defined in, and NOT classes that inherit from it! 
	👉 protected keyword acts the same way as private, meaning it can give us that extra security level, but unlike private, other class that inherit from the base class can access a protected property.
	*/

  protected employees: string[] = [];

  // * shorthand initialisation example below:
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  addEmployee(employee: string): void {
    if (employee === "Gio") {
      return;
    }
    this.employees.push(employee);
  }

  describe() {
    console.log(`${this.name} Department ID(${this.id})`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log(`${this.name} Department ID(${this.id})`);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }
}

const tech = new ITDepartment("IT-101-PPD", ["Bob", "Michael"]);
tech.addEmployee("Sven");
tech.addEmployee("Illidan");
tech.addEmployee("Gio");
console.log(tech);
console.log(tech.describe());

const accounting = new AccountingDepartment("PDP-101-ACC", []);
accounting.mostRecentReport = "Year End Income Tax Report";
// console.log(accounting.mostRecentReport)
console.log(accounting);

accounting.addEmployee("Gio");
accounting.addEmployee("Tina");
accounting.describe();
accounting.printEmployeeInfo();
