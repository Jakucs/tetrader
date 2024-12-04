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
import { NumComponent } from './num/num.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dolgozat';
}
