import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../servicios/api.service";
import { ComicDTO } from "../../dto/comicDTO";
@Component({
  selector: 'app-listar-commics',
  templateUrl: './listar-commics.component.html',
  styleUrls: ['./listar-commics.component.css']
})
export class ListarCommicsComponent implements OnInit{
  comicDTO:ComicDTO[] ;
  constructor(private apiservice: ApiService) { }
  ngOnInit() {

    this.apiservice.listComics()
    .subscribe(response => {
      this.comicDTO=response;
       console.log(" LOS DATOS A CONSUMIR 2 ==>"+JSON.stringify(this.comicDTO));
      
    });


  }

}
