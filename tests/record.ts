import * as Immutable from "immutable";

interface Person {
    name: string;
    age: number;
    gender?: "male" | "female";
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

/* extended record not work
 * this is bacause record is TypedRecord<Person>
 * and TypedRecord<Person> is not interface.
 * If you don't need getter accessor, it will work
 * 
 * // index.d.ts
 * 1744:       export type TypedRecord<T> = TypedMap2<T, Readonly<T>> & Readonly<T>;
 * to
 * 1744:       export type TypedRecord<T> = TypedMap<T>;
 * 
 * I hope TypeScript support mapped types in interface ^_^
 */
//class ExtendedRecord extends record {
//
//}