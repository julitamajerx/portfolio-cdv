import { Component, inject } from '@angular/core';
import { GameService } from '../../games/game-service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private gameService = inject(GameService);
  protected gameList = this.gameService.gameList;

}
