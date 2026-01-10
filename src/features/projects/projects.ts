import { Component, inject } from '@angular/core';
import { GameService } from '../../games/game-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private gameService = inject(GameService);
  private router = inject(Router);
  protected gameList = this.gameService.gameList;

  protected goToSelectedGame(id:number){
   this.gameService.selectedGame.set(id);
   const gameId =this.gameService.selectedGame();
    this.router.navigate(['/game', gameId]);

  }

}
