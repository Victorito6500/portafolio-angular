import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public _infoPaginaService:InfoPaginaService,
               private router:Router ) { }

  ngOnInit(): void {
  }

  buscarProducto(texto:string){
    if(texto.length > 0){
      this.router.navigate(['/search', texto]);
    }
  }

}
