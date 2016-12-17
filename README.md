# advanced-immutable.d.ts

advanced-immutable.d.ts is advanced type definition for [ImmutableJS](https://facebook.github.io/immutable-js/).

forked from [https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/immutable/immutable.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/immutable/immutable.d.ts)
# Requirements

* TypeScript 2.1.4 or above
  * [MappedTypes](https://github.com/Microsoft/TypeScript/pull/12114)
  * [keyof T and T[K]](https://github.com/Microsoft/TypeScript/pull/11929)
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

myRecord = myRecord.set("age", 10); // ok
myRecord.get("age").toFixed(); // => "10"
myRecord = myRecord.set("age", "Alice"); // ok but type wrong
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

myRecord = myRecord.set("age", 10); // ok
myRecord.get("age").toFixed(); // => "10"
myRecord = myRecord.set("age", "Alice"); // TypeScript Error: Argument of type '"Alice"' is not assignable to parameter of type 'number'.
```

Only generics was specified, but you can get error in typescript compilation.

# Usage

Copy [types-local/immutable/index.d.ts](types-local/immutable/index.d.ts) content.

If you use types-local, copy entire types-local directory.
But baseUrl and paths must be used to avoid loading `node_modules/immutable/dist/immutable-nonambient.d.ts`
```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "immutable": ["types-local/immutable"]
        }
    }
}
```

# Why not publish to DefinitelyTyped?

This definition is very useful and safer than original.

But this definition restriction is not the same as ImmutableJS restriction.
(i.e. ImmutableJS does not handle value type of map) 

# More Example

See [tests/record.ts](tests/record.ts)