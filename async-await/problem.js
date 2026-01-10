async function run() {
  await delay(1_000);
}

function delay(ms) {
  return new Promise((resolve, reject) => {});
}

run();

/* TODO:

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
