import { Injectable } from '@angular/core';
import { Game } from './game-model';
import { sample_games } from '../data';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public gameList: Game[] = sample_games;
  
}
