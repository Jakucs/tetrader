/*
File: num.component.html
Author: Jakucs Viktor
Copyright: 2024, Jakucs Viktor
Group: Szoft II-2-E
Date: 2024-12-03
Github: https://github.com/Jakucs
Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-num',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './num.component.html',
  styleUrl: './num.component.css'
})
export class NumComponent {
  radius!:number;
  length!:number;
  area!:number;

  startCalc(){
    this.area=2*(this.radius*this.radius)*Math.PI + 2*this.radius*Math.PI*this.length

  }
}
