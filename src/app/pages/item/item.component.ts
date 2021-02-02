import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto:ProductoDescripcion;
  idProd:string;

  constructor( private route:ActivatedRoute,
               public _productosService:ProductosService ) { }

  ngOnInit(): void {

    this.route.params
      .subscribe( (parametros) => {
        this.idProd = parametros['idProd']; 

        this._productosService.getProducto(parametros['idProd'])
          .subscribe( (producto:ProductoDescripcion) => {
            this.producto = producto;
          });
        
      });

  }

}
