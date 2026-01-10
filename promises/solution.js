function getNumberAfter(ms, value) {
  const isNegativeValue = value < 0;

  return new Promise((resolve, reject) => {
    if (isNegativeValue)
      return reject(`The value must be greater than 0, but was ${value}`);

    setTimeout(() => resolve(value), ms);
  });
}

getNumberAfter(200, 10)
  .then(value => value * 2)
  .then(value => value + 5)
  .then(value => console.log(value))
  .catch(reason => console.log(reason))
  .finally(() => console.log('Done'));

getNumberAfter(200, -1)
  .then(value => value * 2)
  .then(value => value + 5)
  .then(value => console.log(value))
  .catch(reason => console.log(reason))
  .finally(() => console.log('Done'));

/* TODO:

Gegeben:
Schreibe eine Funktion getNumberAfter(ms, value), die nach ms Millisekunden ein Promise erfüllt und value liefert.

Aufgaben:
1) Implementiere getNumberAfter(ms, value) mit new Promise + setTimeout.
2) Erzeuge eine Chain, die:
   - erst 10 liefert,
   - dann verdoppelt,
   - dann 5 addiert,
   - am Ende das Ergebnis loggt.
3) Baue einen Fehler ein:
   - Wenn value kleiner als 0 ist, soll reject("value must be >= 0") passieren.
   - Stelle sicher, dass catch den Fehler loggt.
4) Nutze finally, um immer "done" zu loggen (egal ob Erfolg oder Fehler).

Erwartung (Beispiel):
- getNumberAfter(200, 10) -> am Ende: 25 und "done"
- getNumberAfter(200, -1) -> Fehlerausgabe und "done"
*/
