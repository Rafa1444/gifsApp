import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from './../../services/gifs.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'gifs-gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent {
  @Input()
  gif!: Gif;
  constructor(gifsService: GifsService) { }


}
