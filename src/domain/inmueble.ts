import { callbackify } from "util";

export default class Inmueble {

    static readonly PALABRAS_CLAVES = ["apto", "credito"]

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
        return this.contienePalabrasClave() ? "table-success" : ""
    }

    contienePalabrasClave(){
        return Inmueble.PALABRAS_CLAVES.every(palabra => this.titulo.includes(palabra.toLowerCase()))
    }
    
    contienePalabraClave(palabraClave: string){
        return this.titulo.includes(palabraClave.toLowerCase())
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