import { callbackify } from "util";

export default class Inmueble {

    static readonly PALABRAS_CLAVES = ["apto", "credito"]
    static readonly PALABRAS_CLAVES_NEGACION  = ["no apto", "credito"]

    id: string
    siteId: string
    categoryId: string
    titulo: string
    subTitulo: string
    precio: number
    moneda: number
    stock: number

    constructor(id: string, titulo: string, precio: number, stock: number) {
        this.id = id
        this.siteId = "MLA"
        this.categoryId = "MLA401686"
        this.titulo = titulo
        this.precio = precio
        this.stock = stock
    }

    get inmuebleAptoCredito() {
        return this.descripcionAptoCredito() ? "table-success" : ""
    }

    descripcionAptoCredito() {
        return this.contienePalabrasClave() && this.contienePalabrasClaveNegacion()
    }

    contienePalabrasClaveNegacion(){
        return !Inmueble.PALABRAS_CLAVES_NEGACION.every(palabra => this.contienePalabraClaveNegacion(palabra))
    }

    contienePalabraClaveNegacion(palabraClave: string) {
        return this.titulo.toLowerCase().includes(palabraClave)
    }

    contienePalabrasClave(){
        return Inmueble.PALABRAS_CLAVES.every(palabra => this.contienePalabraClave(palabra))
    }
    
    contienePalabraClave(palabraClave: string){
        return this.titulo.toLowerCase().includes(palabraClave)
    }

    static fromJson(inmuebleJSON) {
        return new Inmueble(
            inmuebleJSON.id,
            inmuebleJSON.titulo,
            inmuebleJSON.precio,
            inmuebleJSON.stock,
        )
    }

    toJSON(): any {
        const result: any = Object.assign({}, this)
        result.asignatario = null
        return result
    }

}