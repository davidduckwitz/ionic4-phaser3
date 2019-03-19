import { Component, ViewChild, AfterContentInit, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NotBoringHelloSceneService } from './../services/not-boring-hello-scene.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [NotBoringHelloSceneService]
})
export class HomePage {

  public gameConfig: GameConfig = {
    title: environment.title,
    version: environment.version,
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,      
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 800,
      height: 600
    },
    width: window.innerWidth,
    height: window.innerHeight -90,
	  backgroundColor: "#dbcf8b",
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
	},	
  };

  constructor(private notBoringHelloScreenService: NotBoringHelloSceneService) {
  }

  public onGameReady(game: Phaser.Game): void {
    game.scene.add('Scene', this.notBoringHelloScreenService, true);
  }

}
