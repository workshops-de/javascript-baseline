# Spread Operator (`...`) in JavaScript

# Spread Operator (`...`) in JavaScript

## Was ist der Spread Operator?

Der **Spread Operator** (`...`) wird in JavaScript verwendet, um Arrays, Objekte oder andere iterierbare Strukturen **aufzubrechen** und ihre Werte **einzeln weiterzugeben**.

Typische Einsatzbereiche:

- Kopieren von Arrays und Objekten
- Zusammenführen von Datenstrukturen
- Erweitern bestehender Daten
- Unterstützung von immutablem Code

## Spread mit Arrays

### Array kopieren

```javascript
const numbers = [1, 2, 3];
const copy = [...numbers];
```

### Arrays zusammenführen

```javascript
const a = [1, 2];
const b = [3, 4];

const combined = [...a, ...b];
```

### Elemente hinzufügen

```javascript
const numbers = [2, 3, 4];
const extended = [1, ...numbers, 5];
```

## Spread mit Objekten

### Objekt kopieren

```javascript
const user = { name: 'Anna', age: 30 };
const copy = { ...user };
```

### Objekte zusammenführen

```javascript
const defaults = { role: 'user', active: true };
const overrides = { active: false };

const settings = { ...defaults, ...overrides };
```

Spätere Properties überschreiben frühere.

### Properties überschreiben oder ergänzen

```javascript
const user = { name: 'Anna', age: 30 };

const updatedUser = {
  ...user,
  age: 31,
  city: 'Berlin'
};
```

## Spread in Funktionsaufrufen

```javascript
const values = [3, 7, 9];
Math.max(...values);
```
