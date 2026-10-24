# Pruebas Jasmine + Karma — reparto del equipo

Basado en el formato de `EjemploSitioFull-main/src/test/Producto.spec.jsx`.

| Integrante | Archivo | Casos | Cantidad |
|---|---|---|---|
| 1 | `src/test/Producto.spec.jsx` | 1, 2, 3, 4: nombre, botón, sin stock y filtro | 4 |
| 2 | `src/test/Carrito.spec.jsx` | 5, 6, 7: sumar, disminuir, vaciar | 3 |
| 3 | `src/test/Validaciones.spec.jsx` | 8, 9, 10: contacto, productos, usuario/horario | 3 |

Cada persona dispone de al menos dos pruebas; la rúbrica menciona diez para desempeño máximo.

## Ejecutar

```bash
npm install
npm test
npm run build
```

Karma utiliza `jasmine` y `webpack`, ejecuta ChromeHeadless y genera `coverage/html/index.html`. Debes tener Google Chrome o Chromium instalado; si ChromeHeadless no encuentra navegador, configura `CHROME_BIN` a su ejecutable.

## Qué mostrar en la presentación

1. `describe` agrupa los casos por integrante.
2. `it` identifica el comportamiento esperado y `expect` comprueba el resultado.
3. `render`, `screen` y `fireEvent` permiten examinar e interactuar con el DOM.
4. `jasmine.createSpy` simula un callback sin hacer operaciones reales.
5. La cobertura es la medición de código ejecutado por pruebas, NO el porcentaje de pruebas aprobadas.

**No se deben reportar porcentajes de cobertura hasta ejecutar `npm test` en un navegador compatible.**
