const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    },

]

const salarios = [
    {
        id: 1,
        salario: 500
    },
    {
        id: 2,
        salario: 1000
    },
];

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( (e) => e.id === id )

    if ( empleado ){
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${ id } no existe`);
    }
}

const getSalario = ( id, callback2 ) => {
    const salario = salarios.find( (s) => s.id === id)

    if (salario){
        callback2(null, salario);
    } else {
        callback2(`No existe el salario del empleado con id ${ id }`)
    }
}

const id = 3;

getEmpleado(id, (err, empleado) => {

    if(err) {
        console.log('error');
        return console.log(err);
    }
    getSalario (id, (err, salario) => {
        if(err) {
            console.log('Error');
            return console.log(err);
        }
    
        console.log('Empleado existe!');
        console.log(salario);
    })

    console.log('Empleado existe!');
    console.log(empleado);
})

