import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {
  @Input()
  public url:string=''
  @Input()
  public alt:string=''
  private loaded:boolean=false

  setLoaded=(isLoad:boolean):void=>{

     this.loaded=isLoad;
  }
  hasLoaded=():boolean=>{
    return this.loaded
  }
}
