import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Producto from '../components/Producto';
import Catalogo from '../components/Catalogo';

const cafe = { id: 1, codigo: 'CAF001', nombre: 'Café Colombia', categoria: 'Café & Té', precio: 12990, stock: 10, imagen: 'cafe.jpg' };

describe('Integrante 1 - Producto y Catálogo', () => {
  afterEach(() => cleanup());

  // Caso de prueba 1: igual al ejemplo del profesor, comprobamos el título visible.
  it('1. Muestra el nombre del producto', () => {
    render(<Producto producto={cafe} onAgregar={() => {}} />);
    const titulo = screen.getByRole('heading', { name: 'Café Colombia' });
    expect(titulo.textContent).toBe('Café Colombia');
  });

  // Caso de prueba 2: spy (mock) para comprobar la comunicación por props.
  it('2. El botón agrega el producto al carrito', () => {
    const agregar = jasmine.createSpy('agregar');
    render(<Producto producto={cafe} onAgregar={agregar} />);
    const boton = screen.getByRole('button', { name: 'Agregar al carrito' });
    expect(boton.disabled).toBeFalse();
    fireEvent.click(boton);
    expect(agregar).toHaveBeenCalledOnceWith(cafe);
  });

  it('3. Un producto sin stock deshabilita el botón', () => {
    const agregar = jasmine.createSpy('agregar');
    render(<Producto producto={{ ...cafe, stock: 0 }} onAgregar={agregar} />);
    expect(screen.getByRole('button', { name: 'Sin stock' }).disabled).toBeTrue();
    expect(agregar).not.toHaveBeenCalled();
  });

  it('4. El buscador filtra los productos que se muestran', () => {
    render(<Catalogo productos={[cafe, {...cafe, id: 2, nombre: 'Vino Reserva', categoria: 'Vinos & Licores'}]} onAgregar={() => {}} />);
    fireEvent.change(screen.getByLabelText('Buscar producto'), { target: { value: 'Colombia' } });
    expect(screen.getByText('Café Colombia')).toBeTruthy();
    expect(screen.queryByText('Vino Reserva')).toBeNull();
  });
  it('8. Muestra todos los productos cuando el buscador está vacío', () => {
  render(
    <Catalogo
      productos={[
        cafe,
        {
          ...cafe,
          id: 2,
          nombre: 'Vino Reserva',
          categoria: 'Vinos & Licores'
        }
      ]}
      onAgregar={() => {}}
    />
  );

  expect(screen.getByText('Café Colombia')).toBeTruthy();
  expect(screen.getByText('Vino Reserva')).toBeTruthy();
});
it('9. Muestra el catálogo vacío cuando no hay productos', () => {
  render(
    <Catalogo
      productos={[]}
      onAgregar={() => {}}
    />
  );

  expect(screen.queryByText('Café Colombia')).toBeNull();
  expect(screen.queryByText('Vino Reserva')).toBeNull();
});
});
