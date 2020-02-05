/*Caracteristicas del nombre de Clase: 
* -Utiliza UpperCamelCase
*Se escriben en singular
* Generalmente el nombre coincide con el del archivo
*/
class Alumno{
    constructor(nombre, fecha, cuenta){
        console.log("El objeto ah sido inicializado");
        this.nombre = nombre;
        this.fecha=fecha;
        this.cuenta=cuenta;
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
        console.log(`Fehca de Nacimiento: ${this.fecha}`)
        console.log(`Numero de Cuenta: ${this.cuenta}`)
    }
}
let alumno1 = new Alumno("Luis", "3 Septiembre 2000", "2016136");
let alumno2 = new Alumno("Goku", "21 Agosto 2001", "20152132");

alumno1.decirHola();
alumno2.decirHola();

alumno1.decirAdios();
alumno2.decirAdios();

alumno1.DatosAlumno();
alumno2.DatosAlumno();
