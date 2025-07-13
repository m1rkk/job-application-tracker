import {Component, viewChild, ViewContainerRef} from '@angular/core';
import {MatFabButton, MatMiniFabButton} from '@angular/material/button';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {Position} from '../position/position';
@Component({
  selector: 'app-positions',
  imports: [
    MatMiniFabButton,
    MatFabButton,
    MatIconModule,
  ],
  templateUrl: './positions.html',
  standalone: true,
  styleUrl: './positions.scss'
})
export class Positions {
  posContainer = viewChild('positionContainer',{read: ViewContainerRef})
  addPosition(){
  this.posContainer()?.createComponent(Position)
  }

}
