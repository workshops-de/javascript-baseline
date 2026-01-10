async function run() {
  console.log('Start');
  try {
    await delay(1_000);
    console.log('End');
  } catch (error) {
    console.log(error);
  }
}

function delay(ms) {
  const isNegative = ms < 0;

  return new Promise((resolve, reject) => {
    return isNegative
      ? reject(`ms needs to be greater than 0 but was ${ms}`)
      : setTimeout(() => resolve(true), ms);
  });
}

run();

/* TODO: Übungsaufgabe (aus README.md)

Gegeben:
Eine Funktion delay(ms), die ein Promise nach ms Millisekunden erfüllt.

Aufgaben:

1. Schreibe eine async-Funktion run(), die:
   - "Start" loggt
   - await delay(1000) ausführt
   - danach "Ende" loggt
2. Baue einen Fehlerfall ein:
   - delay(ms) soll rejecten, wenn ms < 0
   - fange den Fehler mit try / catch ab

Erwartung:

- Bei ms = 1000: Start → (1s Pause) → Ende
- Bei ms < 0: Fehler
*/
