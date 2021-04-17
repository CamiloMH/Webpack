import '../css/componentes.css';

export const prueba = (nombre) => {
    console.log('Creando etiqueta H1');

    const h1 = document.createElement('h1');

    h1.innerHTML = `Hola ${nombre}`;

    document.body.append(h1);
}