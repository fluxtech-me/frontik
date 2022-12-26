let x = 42;
await x; // Noncompliant

let x = new Promise(resolve => resolve(42));
await x;

let y = p ? 42 : new Promise(resolve => resolve(42));
await y;

try {
  doSomething();
} catch (ex) {  // Noncompliant
  throw ex;
}

switch (param) {
  case 0:
    doSomething();
    break;
  default: // default clause should be the first or last one
    error();
    break;
  case 1:
    doSomethingElse();
    break;
}
