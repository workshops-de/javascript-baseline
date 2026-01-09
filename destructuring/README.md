# Object Destructuring in JavaScript

## Was ist Object Destructuring?

**Object Destructuring** ist eine Sprachfunktion von JavaScript, mit der Eigenschaften eines Objekts direkt in einzelne Variablen übernommen werden können.
Die Struktur des Objekts wird dabei auf der linken Seite der Zuweisung beschrieben.

Ziel ist es, Code kürzer, lesbarer und klarer zu machen.

---

## Grundsyntax

```js
const user = {
  name: 'Anna',
  age: 30
};

const { name, age } = user;
```

Nach der Zuweisung existieren folgende Variablen:

- `name` → `"Anna"`
- `age` → `30`

---

## Variablen umbenennen

```js
const { name: userName } = user;
```

Die Property `name` wird in der Variable `userName` gespeichert.

---

## Default-Werte

```js
const { role = 'user' } = user;
```

Falls die Property `role` nicht existiert, wird der Default-Wert `"user"` verwendet.

---

## Verschachteltes Destructuring

```js
const user = {
  name: 'Max',
  settings: {
    theme: 'dark'
  }
};

const {
  settings: { theme }
} = user;
```

## Destructuring in Funktionsparametern

```js
const user = { name: 'Laura', age: 20 };

printUser(user);

// Mit Destructuring der Parameter
function printUser({ name, age }) {
  console.log(name, age);
}

// vs. Ohne Destructuring der Parameter
function printUser(user) {
  console.log(user.name, user.age);
}
```
