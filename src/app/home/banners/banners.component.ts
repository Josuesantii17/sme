import { Component, OnInit } from '@angular/core';
import { Banner } from '../interfaces/home.interface';
declare let $: any;

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  banners: Banner[] = [
    {
      texto: '¡Queremos verte saludable!',
      imagen: '01.jpg',
      btnUrl: '',
      btnTexto: 'Ver más'
    },
    {
      texto: '¡Queremos veccccte saludable OK!',
      imagen: '02.jpg',
      btnUrl: '',
      btnTexto: 'Ver más'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
