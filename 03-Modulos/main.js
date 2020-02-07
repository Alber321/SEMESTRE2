class Fecha {
    /**
     * 
     * @param {number} dia Valor 1..3
     * @param {number} mes varlor 1..9
     * @param {number} año Valor Año de la fecha de Nacimiento
     */
    constructor(dia, mes, año){
        this.fecha = new Date(año, mes-1, dia)
        this.diaSemana = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Sabado"];
        this.mes = ["Enero","Febrero","Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre","Noviembre"
        , "Diciembre"]
    }

    getFormatoCorto(){
        console.log(`Formato Corto: ${this.fecha.getDate()}/${this.fecha.getMonth() + 1}/${this.fecha.getFullYear()}`);
    }
    getFormatoLargo(){
        let dia = this.diaSemana[this.fecha.getDay()];
        let mes = this.mes[this.fecha.getMonth()];
        console.log(`Formato Largo: ${dia} ${this.fecha.getDate()} de ${mes} del ${this.fecha.getFullYear()}`);
    }
}
let fecha1 = new Fecha(3,9,2000);
fecha1.getFormatoCorto();

let fecha2 = new Fecha(3,9,2000);
fecha2.getFormatoLargo();