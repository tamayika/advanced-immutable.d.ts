import * as Immutable from "immutable";

class Person {
    name: string;
    age: number;
}

var record = Immutable.Record<Person>({ name: "Alice", age: 12 });
var myRecord = new record();

// get
const name = myRecord.get("name"); // string

// set
myRecord.set("age", 10); // ok
myRecord.set("age", "aaa"); // error: type unmatch

// merge
myRecord.merge({}); // ok
myRecord.merge({ name: "aaa" }); // ok
myRecord.merge({ name: "aaa", age: 10 }); // ok
myRecord.merge({ nama: "aaa", age: 10 }); // error: typo
myRecord.merge({ age: "aaa" }); // error: type unmatch

// update
myRecord.update("age", age => age + 1); // ok
myRecord.update("aga", age => age + 1); // error: typo
myRecord.update("age", age => age.toString()); // error: type unmatch