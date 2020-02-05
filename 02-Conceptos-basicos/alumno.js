/*Caracteristicas del nombre de Clase: 
* -Utiliza UpperCamelCase
*Se escriben en singular
* Generalmente el nombre coincide con el del archivo
*/
class Alumno{
    constructor(){
        console.log("El objeto ah sido inicializado");
    }
    decirHola(nombre) 
    {
        console.log("Hola soy " + nombre + " Buen día");
        console.log(`Hola soy ${nombre}, buen día`);
        /* Metodos:
        * Utilizan LowerCamelCase
        * Inician con un verbo en infinitivo ( acciones) 
        * realizan una sola Accion
        */

    }    
    decirAdios(nombre){
        console.log(`Hasta Luego ${nombre}! se ah ido F`)
    }
}
let alumno1 = new Alumno();
let alumno2 = new Alumno();

alumno1.decirHola("Juan");
alumno2.decirHola("Pedro");

alumno1.decirAdios("Juan");
alumno2.decirAdios("Pedro");