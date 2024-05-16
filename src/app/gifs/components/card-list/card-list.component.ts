import { Component, EventEmitter, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input()
  GetList: Gif[]=[]

  public getGif(){
    return [...this.GetList]
  }

}
