# ERS — Gourmet & Co. React
Versión: 2.0 — Evaluación Parcial 2 DSY1104

## 1. Propósito y alcance
Actualizar el sitio gourmet existente desde HTML, CSS y JS manipulando DOM directamente a una aplicación React con Vite y Bootstrap. Es una simulación frontend, sin backend.

## 2. Usuarios y componentes
Cliente/visitante: Header, Inicio, Catalogo, Producto, Carrito, Blog, Contacto, Footer.
Administrador (acceso demostrativo sin autenticación): Admin para gestión local de productos y usuarios.

## 3. Requisitos funcionales
- RF01 Visualizar página de inicio, secciones Nosotros, Blog y Contacto.
- RF02 Mostrar los 12 productos originales con precio, categoría e imagen.
- RF03 Filtrar productos por categoría y buscar por nombre.
- RF04 Agregar productos con stock al carrito; sumar/restar cantidades, eliminar y vaciar.
- RF05 Mostrar subtotal total en CLP, y FREE para productos a $0.
- RF06 Persistir carrito localmente entre recargas.
- RF07 Validar formulario de contacto: nombre y comentario obligatorios; correo opcional pero si se escribe debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com. Confirmación solamente local.
- RF08 Leer dos artículos del blog mediante modal.
- RF09 Crear, listar, editar y eliminar productos en administración; código mínimo 3 caracteres; nombre/categoría requeridos; precio no negativo; stock entero no negativo; códigos únicos.
- RF10 Crear, listar, editar y eliminar usuarios en administración; RUN entre 7 y 9 caracteres, sin puntos/guion; dominio de correo permitido; nombre y rol requeridos; RUN único.
- RF11 No permitir la modificación de stock entre las 00:00 y las 05:59, según reloj local del equipo.
- RF12 Persistir cambios de administración en localStorage.

## 4. Requisitos no funcionales
- RNF01 Componentización React con props y useState/useEffect.
- RNF02 Diseño responsive con cuadrícula Bootstrap (col-sm-6, col-lg-4, table-responsive y navbar colapsable).
- RNF03 Pruebas unitarias automatizadas Jasmine/Karma en navegador Headless, con espías y reporter de cobertura.
- RNF04 Datos simulados; no se ofrecen credenciales ni protección de cuentas.

## 5. Restricciones y supuestos
No se dispone de servidor para guardar datos ni recibir mensajes. No se verifican pagos, inventario en servidor, contraseñas ni autenticación. Las imágenes usan enlaces originales remotos. El logo no venía en el material recibido. Las reglas del caso anterior se mantienen donde aplican. El acceso a Admin es demostrativo.

## 6. Trazabilidad
RF02 → Catalogo/Producto; RF03 → Catalogo; RF04–06 → App/Carrito/utils; RF07 → Contacto/utils; RF08 → Blog; RF09–12 → Admin/utils. Ver `COBERTURA_TESTING.md`.
