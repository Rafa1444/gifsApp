import { Component, Input } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) { }
  get list() {
    return this.gifsService.tagsHistory;
  }
  getGifs(tag:string){
    this.gifsService.searchTag(tag)
  }

}
