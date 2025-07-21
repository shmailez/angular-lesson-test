import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() image!: string;
  
  isFullscreen = false;

  openImage(image: string) {
    this.isFullscreen = true;
  }

  closeImage() {
    this.isFullscreen = false;
  }
}