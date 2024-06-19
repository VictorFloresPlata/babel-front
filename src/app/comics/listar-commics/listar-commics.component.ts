import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../servicios/api.service";
@Component({
  selector: 'app-listar-commics',
  templateUrl: './listar-commics.component.html',
  styleUrls: ['./listar-commics.component.css']
})
export class ListarCommicsComponent implements OnInit{

  constructor(private apiservice: ApiService) { }
  ngOnInit() {

    this.apiservice.listComics()
    .subscribe(response => {
     
       console.log(" LOS DATOS A CONSUMIR ==>"+JSON.stringify(response));
      
    });


  }

}
