import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crearlista',
  templateUrl: './crearlista.page.html',
  styleUrls: ['./crearlista.page.scss'],
})
export class CrearlistaPage implements OnInit {

  private productos = 
  [
    {
      id: '1',
      title:'Legumbres',
      imageURL:'https://cdn-icons-png.flaticon.com/512/3274/3274170.png'
    },
    {
      id: '2',
      title:'Verduras',
      imageURL:'https://cdn-icons-png.flaticon.com/512/5346/5346400.png'
    },
    {
      id: '3',
      title:'Frutas',
      imageURL:'https://cdn-icons-png.flaticon.com/512/1625/1625048.png'
    },
    {
      id: '4',
      title:'Lacteos',
      imageURL:'https://cdn-icons-png.flaticon.com/512/2674/2674486.png'
    },
    {
      id: '5',
      title:'Carnes',
      imageURL:'https://cdn-icons-png.flaticon.com/512/3082/3082041.png'
    },
    {
      id: '6',
      title:'Otros',
      imageURL:'https://cdn-icons-png.flaticon.com/512/2550/2550334.png'
    },
         ]


         private SubProductos = 
         [
           {
             familia: 'Legumbres',
             nombre:'porotos',
      
           },
           {
             id: '2',
             title:'Verduras',
             imageURL:'https://cdn-icons-png.flaticon.com/512/5346/5346400.png'
           },
           {
             id: '3',
             title:'Frutas',
             imageURL:'https://cdn-icons-png.flaticon.com/512/1625/1625048.png'
           },
           {
             id: '4',
             title:'Lacteos',
             imageURL:'https://cdn-icons-png.flaticon.com/512/2674/2674486.png'
           },
           {
             id: '5',
             title:'Carnes',
             imageURL:'https://cdn-icons-png.flaticon.com/512/3082/3082041.png'
           },
           {
             id: '6',
             title:'Otros',
             imageURL:'https://cdn-icons-png.flaticon.com/512/2550/2550334.png'
           },
                ]
  
  constructor() { }

  ngOnInit() {
  }

}
