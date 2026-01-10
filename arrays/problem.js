const scores = [12, 5, 29, 29, 8, 17];

/* TODO:
 *
 * Gegeben ist folgendes Array:
 * const scores = [12, 5, 29, 29, 8, 17];
 *
 * Aufgabe 1
 * Schreibe eine Funktion `topScores(scores, n)`, die die höchsten n Werte absteigend
 * sortiert zurückgibt, ohne das Original-Array zu verändern.
 *
 * Hinweis: toSorted() + slice()
 *
 * Aufgabe 2
 * Schreibe eine Funktion `replaceScore(scores, index, value)`, die einen Wert ersetzt,
 * ohne das Original-Array zu verändern.
 *
 * Hinweis: with(index, value)
 *
 * Aufgabe 3 (Bonus)
 * Finde den letzten Index, an dem der Wert `29` vorkommt.
 *
 * Hinweis: findLastIndex()
 *
 * Beispiel-Ergebnisse:
 * - topScores(scores, 3) -> [29, 29, 17]
 * - replaceScore(scores, 1, 99) -> [12, 99, 29, 29, 8, 17]
 * - scores bleibt immer unverändert
 */
