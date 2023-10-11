import { Component } from '@angular/core';
import { items, pageStages, slothGameItem, stageImgMap } from '../interfaces/slothGameItem';
import { fabric } from "fabric";

@Component({
  selector: 'app-sloth-game',
  templateUrl: './sloth-game.component.html',
  styleUrls: ['./sloth-game.component.scss']
})

export class SlothGameComponent {
  items: slothGameItem[] = items;
  stageImgMap = stageImgMap;
  pageStages = pageStages;
  currentStage = pageStages.desc1;
  showDescImg: string = "/assets/images/sloth-game/start.png";

  constructor() {}

  changeStage() {
    if(this.currentStage != pageStages.end2) {
      this.currentStage++;
    }

    if(this.currentStage == pageStages.gaming) {
      window.setTimeout(() => this.generateMaze(), 1000);
    }
  }

  generateMaze() {
    var canvas = new fabric.Canvas('canvas');
    const mazeContainer = document.getElementById('maze-container');
    if (mazeContainer != null) {
      let containerRect = mazeContainer.getBoundingClientRect();
      canvas.setWidth(480);
      canvas.setHeight(240);
    }

    fabric.Object.prototype.transparentCorners = false;

    // player
    fabric.Image.fromURL('/assets/images/sloth-game/sloth.png', function(img) {
      img.scaleToHeight(40);
      img.scaleToWidth(40);
      img.lockScalingX = true;
      img.lockScalingY = true;
      img.lockRotation = true;
      img.hasControls = false;
      img.top = 175;
      img.left = 375;
      canvas.add(img);
    });

    // pillow
    items.forEach((item, index) => {
      fabric.Image.fromURL('/assets/images/sloth-game/pillow.png', function(img) {
        img.scaleToHeight(55);
        img.scaleToWidth(55);
        img.set('selectable', false);
        img.hasControls = false;
        img.top = item.position.top;
        img.left = item.position.left;
        canvas.add(img);
      });
    });


    fabric.loadSVGFromURL('/assets/images/sloth-game/maze.svg', function(objects, options) {
      objects.forEach(x=>{
        x.set('selectable', false); // make object unselectable
      })
      canvas.add(...objects);
    });

    let canDrag = true;

    canvas.on('object:moving', (event) => onChange(event.target));
    canvas.on('mouse:up', (event) => onMoved());
    // canvas.on('mouse:down', (event) => onMoved());

    let originalPosition = { left: 0, top: 0 };

    const onChange = (target: any) => {
      target.setCoords();

      canvas.forEachObject((obj, index) => {
        if (obj === target) return;

        if (target.intersectsWithObject(obj)) {
          let object = JSON.parse(JSON.stringify(obj));
          if (object["src"] && object["src"].includes('pillow')) {
            let index = items.findIndex(x=>x.position.top == object.top && x.position.left == object.left);
            if(index != null) {
              this.showDescImg = items[index].correspondingImg;
              items[index].isShown = true;
            }
          } else {
            canDrag = false;
          }
        }
      });

      if (!canDrag) {
        target.set({
          left: originalPosition.left,
          top: originalPosition.top
        });
      } else {
        // 更新原始位置
        originalPosition.left = target.left;
        originalPosition.top = target.top;
      }
    }

    const onMoved = () => {
      canDrag = true;
      if (this.items[this.items.length-1].isShown) {
        window.setTimeout(() => this.changeStage(), 600);
      }
    }
  }

}
