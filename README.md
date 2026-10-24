# Gourmet & Co. – Migración a React (DSY1104)

Migración del proyecto HTML/CSS/JS de la evaluación anterior siguiendo el patrón Vite + React + componentes del material de clase. Catálogo original (12 productos), categorías, búsqueda, carrito con localStorage, artículos del blog, contacto validado, CRUD de productos y usuarios con persistencia local, Bootstrap responsivo y 10 pruebas unitarias con Jasmine/Karma.

## Requisitos
Node.js compatible con Vite 8 (Node 20.19+ o 22.12+), npm y Google Chrome/Chromium para Karma.

## Comandos
```bash
npm install
npm run dev
npm run build
npm test
```
Abrir la URL local que muestre Vite (normalmente http://localhost:5173). Para pruebas con Chromium en Linux: `CHROME_BIN=/usr/bin/chromium npm test`.

## Estructura
- `src/App.jsx`: estado compartido y localStorage.
- `src/components`: Header, Inicio, Catalogo, Producto, Carrito, Blog, Contacto, Admin y Footer.
- `src/data`: datos migrados de JS anterior.
- `src/utils/tienda.js`: lógica de negocio pura que es fácil probar.
- `src/test/Tienda.spec.jsx`: 10 pruebas Jasmine/Testing Library con Karma + ChromeHeadless.
- `docs/`: especificación de requisitos y reporte de cobertura.

## Consideraciones
Proyecto **frontend** sin API ni base de datos. La información de admin y carrito vive en `localStorage` del navegador; no es multiusuario ni segura para producción. Contacto valida y confirma localmente; no envía correo real. La restricción horaria original se aplica a cambios de stock entre 00:00 y 05:59 (hora del equipo). No se agrega autenticación, pagos reales ni backend porque no estaban implementados.

El proyecto original referenciaba `img/logo.png.png`, pero el archivo no estaba incluido en el ZIP: se reemplazó por un bloque de texto manteniendo el espacio de la sección Nosotros. Las fotografías del catálogo y hero siguen siendo URLs externas originales de Unsplash y necesitan conexión a Internet.

Para publicar en GitHub: crear repositorio público, subir este proyecto sin `node_modules`, agregar enlace en entrega de AVA. El enlace público debe generarlo el equipo; no se crea automáticamente.


## Pruebas como ejemplo del profesor
Se organizaron 10 casos en tres archivos `src/test/*.spec.jsx`, repartidos entre 3 integrantes (4/3/3). Consulte `docs/REPARTO_TESTING.md`.
