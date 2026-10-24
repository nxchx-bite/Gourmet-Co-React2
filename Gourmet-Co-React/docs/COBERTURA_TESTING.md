# Cobertura de testing — Evaluación Parcial 2

## Herramientas
Jasmine: declaraciones `describe`, `it`, `expect`, y `jasmine.createSpy` para simular callbacks. Karma: ejecución de pruebas en ChromeHeadless. Webpack + Babel: transpila JSX. Testing Library: render y consultas DOM. Istanbul (`babel-plugin-istanbul`) + `karma-coverage`: reporte HTML y resumen.

## Casos automatizados (10)
| Caso | Componentes/lógica | Verificación |
|---|---|---|
| PT01 | formatoPrecio | CLP y FREE |
| PT02 | Producto | Render DOM y prop onAgregar (spy) |
| PT03 | Producto | Botón bloqueado sin stock |
| PT04 | Catalogo | Cambio de estado de búsqueda y actualización DOM |
| PT05 | carrito/agregarItem | Agregar, incrementar y mantener inmutabilidad |
| PT06 | carrito/cambiarCantidad | Disminuir, eliminar al llegar a cero y total |
| PT07 | Carrito | Render, botón vaciar y callback mock |
| PT08 | Contacto | Validaciones y DOM de errores |
| PT09 | validarProducto | Precio, stock y código duplicado |
| PT10 | validarUsuario/stockEditable | RUN, dominio, duplicado y horario |

## Procedimiento
1. Instalar dependencias con `npm install`.
2. Ejecutar `npm test` con Chrome instalado.
3. Verificar los 10 casos en consola, 0 fallos.
4. Revisar `coverage/html/index.html` y resumen de cobertura generado.
5. Si alguna prueba falla, corregir código y repetir. Registrar resultados y porcentaje reales para la presentación.

## Alcance y límites
Pruebas unitarias de lógica principal, eventos del DOM y props/estado; mocks mediante spies. Las 10 pruebas **no equivalen a 100% de cobertura de líneas**. La cobertura porcentual debe medirse al ejecutar la suite y no se debe inventar. No se prueba integración con servicios externos porque el proyecto no dispone de backend. Persistencia real del navegador, responsividad y panel admin completo requieren comprobaciones manuales adicionales.

## Pruebas manuales recomendadas
- Abrir desde móvil (DevTools 375px), tablet (768px) y desktop (1280px); revisar navegación/catálogo/tablas.
- Agregar, refrescar, ajustar y vaciar carrito.
- Crear y editar productos/usuarios, refrescar y comprobar persistencia.
- Cambiar hora simulada en prueba unitaria de `stockEditable`; en interfaz comprobar la restricción usando reloj local controlado.
