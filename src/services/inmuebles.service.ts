import { Component, OnInit } from '@angular/core'
import Inmueble from "../domain/inmueble"
import { Http, Response } from "@angular/http"
import { Injectable } from "@angular/core"
import { map } from 'rxjs/operators'
import { REST_SERVER_URL } from "./configuration"
import { APP_ID } from "./configuration"
import { Observable } from "rxjs"
import { Router } from '@angular/router'
import Usuario from '../domain/usuario'
import { Session } from 'protractor';

export interface IInmueblesService {
    //todasLasInmuebles(): Observable<any>
    getInmuebleById(id: number): Observable<Inmueble>
    postInmueble(access_token: string, inmueble: Inmueble)
}

@Injectable({
    providedIn: 'root'
})
export class InmueblesService implements IInmueblesService {

    private usuario: Usuario
    errors = []

    constructor(private http: Http) { }

    /*todasLasInmuebles() {
        return this.http.get(REST_SERVER_URL + "/Inmuebles").pipe(map(this.convertToInmuebles))
    }*/

    getInmuebleById(id: number) {
        return this.http.get(REST_SERVER_URL + "/Inmuebles/" + id).pipe(map(res => this.InmuebleAsJson(res.json())))
    }

    actualizarInmueble(Inmueble: Inmueble) {
        this.http.put(REST_SERVER_URL + "/Inmuebles/" + Inmueble.id, Inmueble.toJSON()).subscribe()
    }

    private convertToInmuebles(res: Response) {
        return res.json().map(InmuebleJson => Inmueble.fromJson(InmuebleJson))
    }

    private InmuebleAsJson(InmuebleJSON): Inmueble {
        return Inmueble.fromJson(InmuebleJSON)
    }

    /*private setUsuarioTest(access_token: string) {
        const SITE_ID = "MLA"
        this.http.post(REST_SERVER_URL + '/users/test_user?access_token=' + access_token, Object.assign({}, SITE_ID)).subscribe(
            data => this.usuario.fromJSON(data),
            error => this.errors.push(error)
        )
    }*/

    getAuthorize() {
        const URL = 'https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id='
        let access_token: string
        //window.location.href = URL + APP_ID
        this.http.post(URL + APP_ID, "").subscribe(
            (data) => access_token = data.headers.get("access_token"),
            error => this.errors.push(error)
        )
        return access_token
    }

    postInmueble(access_token: string, inmueble: Inmueble) {
        //this.setUsuarioTest
        this.http.post(REST_SERVER_URL + '/items?access_token' + access_token, inmueble.toJSON).subscribe
    }
}