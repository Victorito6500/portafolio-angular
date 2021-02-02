import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando:boolean = true;
  productos:Producto[] = [];
  productosFiltrados:Producto[] = [];

  constructor( private http:HttpClient ) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise( ( resolve, reject) => {
      this.http.get('https://angular-html-62bcd-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (productos:Producto[]) => {
        this.productos = productos;
        this.cargando = false;
      });
    });

    
  }

  public getProducto(idProd:string){
    return this.http.get(`https://angular-html-62bcd-default-rtdb.firebaseio.com/productos/${idProd}.json`);
  }

  public buscarProducto(texto:string){
    if(this.productos.length === 0){
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecutar despues de tener los productos
        // Aplicar filtro
        this.filtrarProductos(texto);
      });
    }else{
      // aplicar el filtro
      this.filtrarProductos(texto);
    }

  }

  private filtrarProductos( texto:string ){
    this.productosFiltrados = [];

    texto = texto.toLowerCase();

    this.productos.forEach( (prod) => {
      let tituloLower = prod.titulo.toLowerCase();

      if(prod.categoria.indexOf(texto) >= 0 || tituloLower.indexOf(texto) >= 0){
        this.productosFiltrados.push(prod);
      }
    });
  }
}
