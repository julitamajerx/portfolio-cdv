import { Component, Input } from '@angular/core';
import { Game } from '../../../games/game-model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-header',
  imports: [RouterLink],
  templateUrl: './game-header.html',
  styleUrl: './game-header.css',
})
export class GameHeader {
  @Input() game?: Game;
}
