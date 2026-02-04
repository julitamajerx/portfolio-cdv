import { Component, Input } from '@angular/core';
import { Game } from '../../../games/game-model';

@Component({
  selector: 'app-game-footer',
  imports: [],
  templateUrl: './game-footer.html',
  styleUrl: './game-footer.css',
})
export class GameFooter {
@Input() game?:Game;
}
