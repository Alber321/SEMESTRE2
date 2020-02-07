/*Caracteristicas del nombre de Clase: 
* -Utiliza UpperCamelCase
*Se escriben en singular
* Generalmente el nombre coincide con el del archivo
*/
class Alumno{
    /**
     * 
     * @param {*} nombre 
     * @param {*} cuenta 
     * @param {*} fecha 
     * @param {*} registro 
     */
    constructor(nombre, cuenta, fecha= new Date(), registro){
        console.log("El objeto ah sido inicializado");
        this.nombre = nombre;
        this.fecha=fecha;
        this.cuenta=cuenta;
        this.registro= new Date;
    }
    decirHola() 
    {

        console.log(`Hasta luego! ${this.nombre} se ah ido`)

        /* Metodos:
        * Utilizan LowerCamelCase
        * Inician con un verbo en infinitivo ( acciones) 
        * realizan una sola Accion
        */

    }    
    decirAdios(){
        console.log(`Hasta luego! ${this.nombre} se ah ido`)
    }
    DatosAlumno(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Numero de Cuenta: ${this.cuenta}`)
        console.log(`Fehca de Nacimiento: ${this.fecha}`)
        console.log(`Fecha de Registro: ${this.registro}`)
    }
}
let alumno1 = new Alumno("Luis", "20161136", new Date(2000, 09, 03));
let alumno2 = new Alumno("Goku", "20152132", new Date(2001, 11, 10));

alumno1.decirHola();
alumno2.decirHola();

alumno1.decirAdios();
alumno2.decirAdios();

alumno1.DatosAlumno();
alumno2.DatosAlumno();

let alumno3 = new Alumno("Maria", 20161937);
alumno3.DatosAlumno(); 
let alumno4 = new Alumno("Miguel", "20182315",new Date(2002, 10, 10))
alumno4.DatosAlumno();