import { Component, OnInit } from '@angular/core';
import { ChatService } from "../../services/chat.service";
import { Mensaje } from "../../interfaces/mensaje.interface";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje:string="";

  constructor( public _cs:ChatService) {

      this._cs.cargarMensajes()
          .subscribe();

          }

  ngOnInit() {
  }

  enviar_mensaje(){
    console.log(this.mensaje);
    if(this.mensaje.length === 0 ){
      return
    } else {
      this._cs.agregarMensaje(this.mensaje)
            .then( ()=>this.mensaje="")
            .catch((err)=>console.log('Error al enviar', err ));
    }
  };
}
