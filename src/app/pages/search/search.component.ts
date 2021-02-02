import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor( private route:ActivatedRoute,
               public _productosService:ProductosService ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( (params) => {
        
        this._productosService.buscarProducto(params['texto']);

      })
  }

}
