import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected roles: string[] = ["Unity Developer", "Web Developer","C# Developer", "Angular Developer", "Electron Developer"];

}
