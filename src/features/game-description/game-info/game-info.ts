import { Component, Input } from '@angular/core';
import { Game } from '../../../games/game-model';

@Component({
  selector: 'app-game-info',
  imports: [],
  templateUrl: './game-info.html',
  styleUrl: './game-info.css',
})
export class GameInfo {
@Input() game?:Game;
}
