const productos = [
  {
    id: 1,
    nombre: "Café Colombia",
    categoria: "Café & Té",
    precio: 12990,
    imagen: "https://images.unsplash.com/photo-1633627346972-0f3dfa551171?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    nombre: "Café Etiopía",
    categoria: "Café & Té",
    precio: 14990,
    imagen: "https://images.unsplash.com/photo-1679917010073-ead631d41d91?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    nombre: "Té Earl Grey",
    categoria: "Café & Té",
    precio: 7990,
    imagen: "https://images.unsplash.com/photo-1605618826115-fb9e775cfb40?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    nombre: "Chocolate Artesanal 70%",
    categoria: "Chocolates & Dulces",
    precio: 6990,
    imagen: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    nombre: "Caja de Bombones",
    categoria: "Chocolates & Dulces",
    precio: 8490,
    imagen: "https://images.unsplash.com/photo-1687795097254-f019f9d7fd17?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    nombre: "Trufas de Chocolate",
    categoria: "Chocolates & Dulces",
    precio: 9990,
    imagen: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    nombre: "Queso Maduro",
    categoria: "Quesos & Charcutería",
    precio: 9990,
    imagen: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    nombre: "Tabla de Charcutería",
    categoria: "Quesos & Charcutería",
    precio: 18990,
    imagen: "https://images.unsplash.com/photo-1601912262364-3a35aa0d9399?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    nombre: "Queso Brie Artesanal",
    categoria: "Quesos & Charcutería",
    precio: 11990,
    imagen: "https://images.unsplash.com/photo-1707037490967-d763ec8daeb5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 10,
    nombre: "Vino Reserva",
    categoria: "Vinos & Licores",
    precio: 15990,
    imagen: "https://images.unsplash.com/photo-1656361281529-c6776ededefa?q=80&w=731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 11,
    nombre: "Vino Carménère",
    categoria: "Vinos & Licores",
    precio: 17990,
    imagen: "https://images.unsplash.com/photo-1641653383551-34556ddd5db1?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 12,
    nombre: "Degustación de Café",
    categoria: "Café & Té",
    precio: 0,
    imagen: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

let carrito = JSON.parse(localStorage.getItem("carritoGourmet")) || [];

function formatoPrecio(precio) {
  if (precio === 0) {
    return "FREE";
  }

  return "$" + precio.toLocaleString("es-CL");
}

function mostrarProductos() {
  const contenedor = document.getElementById("listaProductos");

  productos.forEach(producto => {
    contenedor.innerHTML += `
      <div class="col-sm-6 col-lg-4">
        <article class="card producto-card h-100 shadow-sm">
          <img src="${producto.imagen}" class="card-img-top producto-img" alt="${producto.nombre}">

          <div class="card-body d-flex flex-column">
            <span class="text-muted small">${producto.categoria}</span>
            <h3 class="h5 mt-1">${producto.nombre}</h3>

            <p class="${producto.precio === 0 ? "precio-free" : "fw-bold"}">
              ${formatoPrecio(producto.precio)}
            </p>

            <button class="btn btn-dark mt-auto" onclick="agregarAlCarrito(${producto.id})">
              Agregar al carrito
            </button>
          </div>
        </article>
      </div>
    `;
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  const existente = carrito.find(p => p.id === id);

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({
      ...producto,
      cantidad: 1
    });
  }

  actualizarCarrito();
}

function cambiarCantidad(id, cambio) {
  const producto = carrito.find(p => p.id === id);

  if (!producto) {
    return;
  }

  producto.cantidad += cambio;

  if (producto.cantidad <= 0) {
    carrito = carrito.filter(p => p.id !== id);
  }

  actualizarCarrito();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(p => p.id !== id);
  actualizarCarrito();
}

function actualizarCarrito() {
  const contenido = document.getElementById("contenidoCarrito");
  const cantidad = document.getElementById("cantidadCarrito");
  const total = document.getElementById("totalCarrito");

  contenido.innerHTML = "";

  if (carrito.length === 0) {
    contenido.innerHTML = '<p class="text-muted">El carrito está vacío.</p>';
  }

  carrito.forEach(producto => {
    contenido.innerHTML += `
      <div class="carrito-item">
        <div class="d-flex justify-content-between">
          <strong>${producto.nombre}</strong>
          <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${producto.id})">
            X
          </button>
        </div>

        <div class="d-flex justify-content-between align-items-center mt-2">
          <span>${formatoPrecio(producto.precio)}</span>

          <div>
            <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${producto.id}, -1)">-</button>
            <span class="mx-2">${producto.cantidad}</span>
            <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${producto.id}, 1)">+</button>
          </div>
        </div>
      </div>
    `;
  });

  const cantidadTotal = carrito.reduce((acum, producto) => acum + producto.cantidad, 0);

  const precioTotal = carrito.reduce(
    (acum, producto) => acum + producto.precio * producto.cantidad,
    0
  );

  cantidad.textContent = cantidadTotal;
  total.textContent = formatoPrecio(precioTotal);

  localStorage.setItem("carritoGourmet", JSON.stringify(carrito));
}

document.getElementById("btnVaciar").addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
});

document.getElementById("formContacto").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const comentario = document.getElementById("comentario").value.trim();

  document.getElementById("errorNombre").textContent = "";
  document.getElementById("errorCorreo").textContent = "";
  document.getElementById("errorComentario").textContent = "";

  let correcto = true;

  if (nombre === "") {
    document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
    correcto = false;
  }

  const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

  if (correo !== "" && !dominiosPermitidos.some(dominio => correo.endsWith(dominio))) {
    document.getElementById("errorCorreo").textContent = "El correo debe usar un dominio permitido.";
    correcto = false;
  }

  if (comentario === "") {
    document.getElementById("errorComentario").textContent = "El comentario es obligatorio.";
    correcto = false;
  }

  if (correcto) {
    alert("Mensaje enviado correctamente.");
    this.reset();
  }
});

mostrarProductos();
actualizarCarrito();
