import { Component, inject } from '@angular/core';
import { GameHeader } from './game-header/game-header';
import { GameInfo } from "./game-info/game-info";
import { Game } from '../../games/game-model';
import { GameService } from '../../games/game-service';
import { GameFooter } from "./game-footer/game-footer";

import { GameText } from "./game-text/game-text";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-game-description',
  imports: [GameHeader, GameInfo, GameFooter, GameText, Footer],
  templateUrl: './game-description.html',
  styleUrl: './game-description.css',
})
export class GameDescription {
  protected game?:Game;
  private gameService = inject(GameService);
  
   ngOnInit(): void {
    this.game = this.gameService.getGameById();
  }
}
