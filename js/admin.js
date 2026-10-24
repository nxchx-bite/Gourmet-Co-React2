const productosAdmin = [
  { codigo: "CAF001", nombre: "Café Colombia", categoria: "Café & Té", precio: 12990, stock: 10 },
  { codigo: "CAF002", nombre: "Café Etiopía", categoria: "Café & Té", precio: 14990, stock: 8 },
  { codigo: "TEA001", nombre: "Té Earl Grey", categoria: "Café & Té", precio: 7990, stock: 12 },
  { codigo: "CHO001", nombre: "Chocolate Artesanal 70%", categoria: "Chocolates & Dulces", precio: 6990, stock: 15 },
  { codigo: "CHO002", nombre: "Caja de Bombones", categoria: "Chocolates & Dulces", precio: 8490, stock: 9 },
  { codigo: "CHO003", nombre: "Trufas de Chocolate", categoria: "Chocolates & Dulces", precio: 9990, stock: 11 },
  { codigo: "QUE001", nombre: "Queso Maduro", categoria: "Quesos & Charcutería", precio: 9990, stock: 7 },
  { codigo: "CHA001", nombre: "Tabla de Charcutería", categoria: "Quesos & Charcutería", precio: 18990, stock: 5 },
  { codigo: "QUE002", nombre: "Queso Brie Artesanal", categoria: "Quesos & Charcutería", precio: 11990, stock: 6 },
  { codigo: "VIN001", nombre: "Vino Reserva", categoria: "Vinos & Licores", precio: 15990, stock: 14 },
  { codigo: "VIN002", nombre: "Vino Carménère", categoria: "Vinos & Licores", precio: 17990, stock: 10 },
  { codigo: "DEG001", nombre: "Degustación de Café", categoria: "Café & Té", precio: 0, stock: 20 }
];

const usuariosAdmin = [
  {
    run: "19011022K",
    nombre: "Ana Pérez",
    correo: "ana@gmail.com",
    rol: "Cliente"
  },
  {
    run: "201234567",
    nombre: "Luis Soto",
    correo: "luis@duoc.cl",
    rol: "Vendedor"
  }
];

const modalProducto = new bootstrap.Modal(document.getElementById("modalProducto"));
const modalUsuario = new bootstrap.Modal(document.getElementById("modalUsuario"));

function formatoPrecio(precio) {
  if (Number(precio) === 0) {
    return "FREE";
  }

  return "$" + Number(precio).toLocaleString("es-CL");
}

function mostrarSeccion(seccion) {
  const productos = document.getElementById("seccionProductos");
  const usuarios = document.getElementById("seccionUsuarios");

  if (seccion === "productos") {
    productos.classList.remove("d-none");
    usuarios.classList.add("d-none");
  } else {
    usuarios.classList.remove("d-none");
    productos.classList.add("d-none");
  }
}

function mostrarProductos() {
  const tabla = document.getElementById("tablaProductos");
  tabla.innerHTML = "";

  productosAdmin.forEach((producto, indice) => {
    tabla.innerHTML += `
      <tr>
        <td>${producto.codigo}</td>
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td>${formatoPrecio(producto.precio)}</td>
        <td>${producto.stock}</td>
        <td>
          <button class="btn btn-sm btn-outline-primary me-1"
                  onclick="editarProducto(${indice})">
            Editar
          </button>

          <button class="btn btn-sm btn-outline-danger"
                  onclick="eliminarProducto(${indice})">
            Eliminar
          </button>
        </td>
      </tr>
    `;
  });
}

function abrirNuevoProducto() {
  document.getElementById("tituloProducto").textContent = "Nuevo producto";
  document.getElementById("formProducto").reset();
  document.getElementById("indiceProducto").value = "";
  document.getElementById("errorProducto").textContent = "";
  modalProducto.show();
}

function editarProducto(indice) {
  const producto = productosAdmin[indice];

  document.getElementById("tituloProducto").textContent = "Editar producto";
  document.getElementById("indiceProducto").value = indice;
  document.getElementById("codigoProducto").value = producto.codigo;
  document.getElementById("nombreProducto").value = producto.nombre;
  document.getElementById("categoriaProducto").value = producto.categoria;
  document.getElementById("precioProducto").value = producto.precio;
  document.getElementById("stockProducto").value = producto.stock;
  document.getElementById("errorProducto").textContent = "";

  modalProducto.show();
}

function eliminarProducto(indice) {
  productosAdmin.splice(indice, 1);
  mostrarProductos();
}

document.getElementById("formProducto").addEventListener("submit", function(event) {
  event.preventDefault();

  const indice = document.getElementById("indiceProducto").value;
  const codigo = document.getElementById("codigoProducto").value.trim();
  const nombre = document.getElementById("nombreProducto").value.trim();
  const categoria = document.getElementById("categoriaProducto").value;
  const precio = Number(document.getElementById("precioProducto").value);
  const stock = Number(document.getElementById("stockProducto").value);
  const error = document.getElementById("errorProducto");

  error.textContent = "";

  if (codigo.length < 3) {
    error.textContent = "El código debe tener al menos 3 caracteres.";
    return;
  }

  if (nombre === "" || categoria === "") {
    error.textContent = "Complete los campos obligatorios.";
    return;
  }

  if (precio < 0 || stock < 0 || !Number.isInteger(stock)) {
    error.textContent = "Revise el precio y el stock.";
    return;
  }

  const nuevoProducto = {
    codigo,
    nombre,
    categoria,
    precio,
    stock
  };

  if (indice === "") {
    productosAdmin.push(nuevoProducto);
  } else {
    productosAdmin[indice] = nuevoProducto;
  }

  mostrarProductos();
  modalProducto.hide();
});

function mostrarUsuarios() {
  const tabla = document.getElementById("tablaUsuarios");
  tabla.innerHTML = "";

  usuariosAdmin.forEach((usuario, indice) => {
    tabla.innerHTML += `
      <tr>
        <td>${usuario.run}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.correo}</td>
        <td>${usuario.rol}</td>
        <td>
          <button class="btn btn-sm btn-outline-primary me-1"
                  onclick="editarUsuario(${indice})">
            Editar
          </button>

          <button class="btn btn-sm btn-outline-danger"
                  onclick="eliminarUsuario(${indice})">
            Eliminar
          </button>
        </td>
      </tr>
    `;
  });
}

function abrirNuevoUsuario() {
  document.getElementById("tituloUsuario").textContent = "Nuevo usuario";
  document.getElementById("formUsuario").reset();
  document.getElementById("indiceUsuario").value = "";
  document.getElementById("errorUsuario").textContent = "";
  modalUsuario.show();
}

function editarUsuario(indice) {
  const usuario = usuariosAdmin[indice];

  document.getElementById("tituloUsuario").textContent = "Editar usuario";
  document.getElementById("indiceUsuario").value = indice;
  document.getElementById("runUsuario").value = usuario.run;
  document.getElementById("nombreUsuario").value = usuario.nombre;
  document.getElementById("correoUsuario").value = usuario.correo;
  document.getElementById("rolUsuario").value = usuario.rol;
  document.getElementById("errorUsuario").textContent = "";

  modalUsuario.show();
}

function eliminarUsuario(indice) {
  usuariosAdmin.splice(indice, 1);
  mostrarUsuarios();
}

document.getElementById("formUsuario").addEventListener("submit", function(event) {
  event.preventDefault();

  const indice = document.getElementById("indiceUsuario").value;
  const run = document.getElementById("runUsuario").value.trim().toUpperCase();
  const nombre = document.getElementById("nombreUsuario").value.trim();
  const correo = document.getElementById("correoUsuario").value.trim();
  const rol = document.getElementById("rolUsuario").value;
  const error = document.getElementById("errorUsuario");

  error.textContent = "";

  if (run.length < 7 || run.length > 9 || run.includes(".") || run.includes("-")) {
    error.textContent = "El RUN debe tener entre 7 y 9 caracteres, sin puntos ni guion.";
    return;
  }

  const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

  if (!dominiosPermitidos.some(dominio => correo.endsWith(dominio))) {
    error.textContent = "El correo debe usar un dominio permitido.";
    return;
  }

  if (nombre === "" || rol === "") {
    error.textContent = "Complete los campos obligatorios.";
    return;
  }

  const nuevoUsuario = {
    run,
    nombre,
    correo,
    rol
  };

  if (indice === "") {
    usuariosAdmin.push(nuevoUsuario);
  } else {
    usuariosAdmin[indice] = nuevoUsuario;
  }

  mostrarUsuarios();
  modalUsuario.hide();
});

mostrarProductos();
mostrarUsuarios();
ß