# Arrays in JavaScript (für Einsteiger)

## Was ist ein Array?

Ein **Array** ist eine geordnete Liste von Werten. Die Elemente können unterschiedliche Datentypen haben.
Der Zugriff erfolgt über einen **Index**, der bei `0` beginnt.

Beispiel:
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
console.log(fruits.length); // 3

# Arrays in JavaScript (für Einsteiger)

## Was ist ein Array?

Ein **Array** ist eine geordnete Liste von Werten. Die Elemente können unterschiedliche Datentypen haben.
Der Zugriff erfolgt über einen **Index**, der bei `0` beginnt.

Beispiel:

```js
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // "apple"
console.log(fruits.length); // 3
```

## Mutable vs. Immutable (non-mutating) Methoden

### Mutable Methoden (verändern das Original-Array)

Diese Methoden **ändern das bestehende Array direkt**. Das kann zu Seiteneffekten führen, wenn das Array mehrfach verwendet wird.

Typische mutable Methoden:

- push(), pop()
- shift(), unshift()
- splice()
- sort()
- reverse()

Beispiel:

```js
const numbers = [3, 1, 2];
numbers.sort();
console.log(numbers); // [1, 2, 3] → Original wurde verändert
```

### Non-Mutating Methoden (geben ein neues Array zurück)

Diese Methoden **verändern das Original nicht**, sondern erzeugen ein **neues Array**.
Das ist in moderner JavaScript-Entwicklung meist der bevorzugte Stil.

Klassische non-mutating Methoden:

- map()
- filter()
- slice()
- concat()

Beispiel:

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] → unverändert
```

## Neue Array-Methoden (ES2023 – „change by copy")

Diese Methoden sind moderne Alternativen zu mutierenden Methoden.
Sie verhalten sich gleich, **ändern aber nicht das Original-Array**.

- toSorted() → wie sort(), aber ohne Mutation
- toReversed() → wie reverse(), aber ohne Mutation
- toSpliced() → wie splice(), aber ohne Mutation
- with(index, value) → ersetzt genau ein Element ohne Mutation
- findLast(), findLastIndex() → Suche von hinten

Beispiel:

```js
const original = [3, 1, 2];

const sorted = original.toSorted();
console.log(sorted); // [1, 2, 3]
console.log(original); // [3, 1, 2]

const changed = original.with(0, 99);
console.log(changed); // [99, 1, 2]
```
