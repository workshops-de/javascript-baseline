# JavaScript Module – mit Analogien zu C#, Python und Java

## Grundidee (sprachübergreifend)

Module kapseln Code und machen klar sichtbar:

- was öffentlich nutzbar ist
- was intern bleibt
- welche Abhängigkeiten existieren

## JavaScript (Referenz)

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from './math.js';
```

## Analogie zu C#

JavaScript Modul ≈ C# Namespace + Klasse

```csharp
// MathUtils.cs
namespace Utils {
  public static class MathUtils {
    public static int Add(int a, int b) {
      return a + b;
    }
  }
}

using Utils;

MathUtils.Add(2, 3);
```

export ≈ public
nicht exportiert ≈ private / internal

## Analogie zu Python

JavaScript Modul ≈ Python Modul (Datei)

```python
# math_utils.py
def add(a, b):
  return a + b

from math_utils import add
```

Datei = Modul
Funktionen sind standardmäßig öffentlich

## Analogie zu Java

JavaScript Modul ≈ Java Package + public Klasse

```java
package utils;

public class MathUtils {
  public static int add(int a, int b) {
    return a + b;
  }
}

import utils.MathUtils;

MathUtils.add(2, 3);
```

## Wichtiger Unterschied von JavaScript

- Exports sind explizit
- Nur exportierter Code ist von außen sichtbar
- Sehr klare Modul-APIs

## Merksatz

> JavaScript Module entsprechen konzeptionell Modulen in C#, Python und Java –
> sie sind lediglich expliziter und dateibasiert.
