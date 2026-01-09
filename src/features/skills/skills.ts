import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected skills: string[] = [
    'C#',
    'Unity Engine',
    'Netcode',
    'UnityWebRequest',
    'Dotween',
    'ASP.NET',
    'Entity Framework',
    'Git',
    'Azure DevOps',
    'Jira',
  ];
}
