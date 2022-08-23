import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent implements OnInit {
    ///NO SE SABE DE QUE TIPO ES HASTA QUE SE DEFINA
 @Input() listadoNoticias:any;
  constructor() { }

  ngOnInit(): void {
  }

}
