import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Carrito from '../components/Carrito';
import { agregarItem, cambiarCantidad, totalCarrito } from '../utils/tienda';
const cafe = { id: 1, codigo:'CAF001', nombre:'Café Colombia', categoria:'Café & Té', precio:12990, stock:10, imagen:'cafe.jpg' };

describe('Integrante 2 - Carrito', () => {
  afterEach(() => cleanup());

  it('5. Agregar dos veces acumula cantidades sin modificar el arreglo original', () => {
    const primero = agregarItem([], cafe);
    const segundo = agregarItem(primero, cafe);
    expect(primero[0].cantidad).toBe(1);
    expect(segundo[0].cantidad).toBe(2);
  });

  it('6. Disminuir cantidades y calcular total', () => {
    const dos = [{ ...cafe, cantidad: 2 }];
    expect(totalCarrito(dos)).toBe(25980);
    expect(cambiarCantidad(dos, 1, -1)[0].cantidad).toBe(1);
    expect(cambiarCantidad(dos, 1, -2)).toEqual([]);
  });

  it('7. Botón Vaciar carrito llama a la función recibida por props', () => {
    const vaciar = jasmine.createSpy('vaciar');
    render(<Carrito visible={true} carrito={[{...cafe,cantidad:1}]} onCerrar={() => {}} onCambiar={() => {}} onEliminar={() => {}} onVaciar={vaciar} />);
    fireEvent.click(screen.getByRole('button', { name: 'Vaciar carrito' }));
    expect(vaciar).toHaveBeenCalledTimes(1);
  });
  it('11. Eliminar un producto del carrito', () => {
  const eliminar = jasmine.createSpy('eliminar');

  render(
    <Carrito
      visible={true}
      carrito={[{ ...cafe, cantidad: 1 }]}
      onCerrar={() => {}}
      onCambiar={() => {}}
      onEliminar={eliminar}
      onVaciar={() => {}}
    />
  );

  
  const boton = screen.getByRole('button', { name: /eliminar/i });
  fireEvent.click(boton);

  expect(eliminar).toHaveBeenCalled();
});
});
