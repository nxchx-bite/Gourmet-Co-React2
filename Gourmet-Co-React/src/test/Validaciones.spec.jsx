import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Contacto from '../components/Contacto';
import { validarProducto, validarUsuario, stockEditable, formatoPrecio } from '../utils/tienda';
const cafe = { codigo:'CAF001', nombre:'Café Colombia', categoria:'Café & Té', precio:12990, stock:10, imagen:'cafe.jpg' };
const usuario = { run:'19011022K', nombre:'Ana Pérez', correo:'ana@gmail.com', rol:'Cliente' };

describe('Integrante 3 - Contacto y administración', () => {
  afterEach(() => cleanup());

  it('8. El formulario de contacto muestra validaciones en el DOM', () => {
    render(<Contacto />);
    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensaje' }));
    expect(screen.getByText('El nombre es obligatorio.')).toBeTruthy();
    expect(screen.getByText('El comentario es obligatorio.')).toBeTruthy();
  });

  it('9. El administrador rechaza precio negativo y código duplicado', () => {
    expect(validarProducto({...cafe, precio: -1}, [])).toContain('precio');
    expect(validarProducto(cafe, [cafe])).toContain('registrado');
    expect(validarProducto(cafe, [cafe], 'CAF001')).toBe('');
  });

  it('10. Valida usuario y la restricción horaria de stock', () => {
    expect(validarUsuario({...usuario, run:'1.234-5'}, [])).toContain('RUN');
    expect(validarUsuario(usuario, [usuario])).toContain('existe');
    expect(stockEditable(0)).toBeFalse();
    expect(stockEditable(5)).toBeFalse();
    expect(stockEditable(6)).toBeTrue();
    expect(formatoPrecio(12990)).toBe('$12.990');
  });
});
