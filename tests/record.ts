import * as Immutable from "immutable";

interface Person {
    name: string;
    age: number;
    gender: undefined | "male" | "female";
}

var record = Immutable.Record<Person>({ name: "Alice", age: 12, gender: undefined });
// var record = Immutable.Record<Person>({ name: "Alice", age: 12 }); // error: lack gender property
// var record = Immutable.Record<Person>({ name: "Alice", age: 12, gender: "animal" }); // error: type unmatch
var myRecord = new record();

// get
let name = myRecord.get("name"); // string
name = myRecord.name;

// set
myRecord = myRecord.set("age", 10); // ok
// myRecord.set("age", "aaa"); // error: type unmatch
// myRecord.name = "Bob"; // error: can not assign

// merge
myRecord = myRecord.merge({}); // ok
myRecord = myRecord.merge({ name: "aaa" }); // ok
myRecord = myRecord.merge({ name: "aaa", age: 10 }); // ok
// myRecord.merge({ nama: "aaa", age: 10 }); // error: typo
// myRecord.merge({ age: "aaa" }); // error: type unmatch

// update
myRecord = myRecord.update("age", age => age + 1); // ok
// myRecord.update("aga", age => age + 1); // error: typo
// myRecord.update("age", age => age.toString()); // error: type unmatch

class ExtendedRecord extends record {
    public getName() {
        return this.get('name');
    }
    public setName(name: string) {
        return this.set('name', name);
    }
}

var extendedMyRecord = new ExtendedRecord();
console.log(extendedMyRecord.name);
extendedMyRecord = extendedMyRecord.setName('Bob');
console.log(extendedMyRecord.name);