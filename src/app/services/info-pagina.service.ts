import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina;
  cargada:boolean = false;

  equipo:any[] = [];

  constructor( private http:HttpClient ) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (respuesta:InfoPagina) => {

        this.cargada = true;
        this.info = respuesta;
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-62bcd-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (equipo:any[]) => {
        this.equipo = equipo;
    })
  }

  

}
