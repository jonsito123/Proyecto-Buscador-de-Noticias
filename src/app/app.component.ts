import { Component } from '@angular/core';
import { NoticiaService } from './servicios/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  listadoNoticias:any[]=[]
  loading=false
  constructor(private noticiasSerivce:NoticiaService){

  }
  title = 'mi-primera-app';
  buscadorNoticias(parametros:any){
    this.loading=true
    ///set timeout
    setTimeout(() => {
      this.noticiasSerivce.getNoticias(parametros).subscribe(data=>{
        this.loading=false
       this.listadoNoticias=data.articles;
      
      },
        error=>
        {
             console.log(error)
             this.loading=false
        }
      )
    }, 1000);
  }
}
