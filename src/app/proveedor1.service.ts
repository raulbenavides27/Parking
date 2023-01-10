import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule}from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
//import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {
  
  constructor(
    public http: HttpClient,
    private sqlite: SQLite) 
    {
      //creamos la base de dato
      this.sqlite.create({
        name: 'datos.db'
      }).then((db:SQLiteObject) =>{
        db.executeSql('CREATE TABLE IF NOT EXISTS USUARIO(MAIL VARCHAR(75),CONTRASEÑA VARCHAR(30))'
        ,[]).then(() => {
            console.log('Tabla creada');
        }).catch(e =>{
          console.log('error con la tabla');
        })
    }).catch(e =>{
        console.log('base de dato con error ');
     })
     }



    // esto es para optener los datos desde una api 
  obtenerDatos<T> (url : string){

     url = 'https://jsonplaceholder.typicode.com/users'
     return this.http.get<T[]>(url);
     
    }
}
