import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { ListaDocumentosComponent } from './lista-documentos/lista-documentos.component';
import { SocketIoModule,SocketIoConfig } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';

const config: SocketIoConfig = {url: 'http://localhost:3500', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    DocumentosComponent,
    ListaDocumentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
