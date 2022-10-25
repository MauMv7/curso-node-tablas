const deadpool = {
    nombre: 'wade',
    apellido: 'Winston',
    poder: 'regeneracion',
    edad:50,
    getNombre: () => {
        return `${ this.nombre } ${this.apellido} ${this.poder}`
    }
}

//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

function imprimeHeroe( {nombre, apellido, poder, edad = 0 } ){

    console.log(nombre, apellido, poder, edad);

}

imprimeHeroe(deadpool);

const heroes = ['deadpool', 'superman', 'batman'];

const [, , h3] = heroes;

console.log(h3);

