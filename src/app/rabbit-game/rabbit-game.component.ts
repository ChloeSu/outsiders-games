import { Component } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { RabbitGameItem, additionalItems } from '../interfaces/rabbitGameItem';

@Component({
  selector: 'app-rabbit-game',
  templateUrl: './rabbit-game.component.html',
  styleUrls: ['./rabbit-game.component.scss']
})
export class RabbitGameComponent {
  rabbitHealth: number = 0;
  items: RabbitGameItem[] = additionalItems;

  getRabbitImageSrc(): string {
    return `/assets/images/rabbit-game/${Math.floor(this.rabbitHealth / 20)}.jpg`;
  }

  onItemDragEnd(event: CdkDragEnd, item: RabbitGameItem): void {
    const rabbitElement = document.getElementById('rabbit-container');
    if (rabbitElement) {
      const rabbitRect = rabbitElement.getBoundingClientRect();
      const itemRect = event.source.getRootElement().getBoundingClientRect();

      if (
        itemRect.top >= rabbitRect.top &&
        itemRect.bottom <= rabbitRect.bottom &&
        itemRect.left >= rabbitRect.left &&
        itemRect.right <= rabbitRect.right
      ) {
        this.updateRabbitHealth(item.score);
        this.items = this.items.filter(i => i !== item);
      }
    }
  }

  updateRabbitHealth(score: number): void {
    this.rabbitHealth = Math.max(Math.min(this.rabbitHealth + score, 100),0);
  }
}
