import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Documentos } from '../modelos/documentos';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  count = 0;
  documentoActual = this.socket.fromEvent<Documentos>('gestionDato');
  docs = this.socket.fromEvent<string[]>('gestionDatos');

  constructor(private socket:Socket ) { }

  getDoc = (id: string) => {
    this.socket.emit('getDoc', id)
  }

  newDoc = () => {
    this.socket.emit('addDoc', {id: this.docId(), doc: ''})
  }

  editDoc = (doc: Documentos) => {
    this.socket.emit('editDoc', doc)
  }

  private docId = () =>{
    this.count ++;
    const text = `documento ${this.count}`
    return text;
  }
}
