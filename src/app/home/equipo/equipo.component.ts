import { Component, OnInit } from '@angular/core';
import { Equipo } from '../interfaces/home.interface';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  equipo: Equipo[] = [
    {
      nombre: 'Dr. Gonzalo P.',
      cargo: 'Pediatra',
      imagen: 'assets/images/team/03.jpg'
    },
    {
      nombre: 'Dr. Gonzalo P.',
      cargo: 'Pediatra',
      imagen: 'assets/images/team/03.jpg'
    },
    {
      nombre: 'Dr. Ramón P.',
      cargo: 'Pediatra',
      imagen: 'assets/images/team/03.jpg'
    },
    {
      nombre: 'Dr. Daniel P.',
      cargo: 'Pediatra',
      imagen: 'assets/images/team/03.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
