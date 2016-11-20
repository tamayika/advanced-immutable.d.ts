# advanced-immutable.d.ts

advanced-immutable.d.ts is advanced type definition for [ImmutableJS](https://facebook.github.io/immutable-js/).

forked from [https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/immutable/immutable.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/immutable/immutable.d.ts)
# Requirements

* TypeScript 2.1.3 or above
* ImmutableJS 3.8.1

# What's advanced?

See below code.
```typescript
import * as Immutable from "immutable";

class Person {
    name: string;
    age: number;
}

var record = Immutable.Record({ name: "Alice", age: 12 });
var myRecord = new record();

myRecord.set("age", 10); // ok
myRecord.get("age").toFixed(); // => "10"
myRecord.set("age", "Alice"); // ok but type wrong
myRecord.get("age") + 1; // TypeError: "Alice1".toFixed is not a function
```

There is no restriction of record(or map) for the value types in builtin definition of ImmutableJS.
So if you set wrong type value, you will see runtime error.

With advanced-immutable.d.ts

```typescript
import * as Immutable from "immutable";

class Person {
    name: string;
    age: number;
}

var record = Immutable.Record<Person>({ name: "Alice", age: 12 }); // only here modified
var myRecord = new record();

myRecord.set("age", 10); // ok
myRecord.get("age").toFixed(); // => "10"
myRecord.set("age", "Alice"); // TypeScript Error: Argument of type '"Alice"' is not assignable to parameter of type 'number'.
```

Only generics was specified, but you can get error in typescript compilation.

# Usage

Copy [types-local/immutable/index.d.ts](types-local/immutable/index.d.ts) content.

If you use types-local, copy entire types-local directory.
But moduleResolution must be `classic` to avoid loading `node_modules/immutable/dist/immutable-nonambient.d.ts`
```json
{
    "moduleResolution": "classic",
}
```

# More Example

See [test/record.ts](test/record.ts)