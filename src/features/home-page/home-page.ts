import { Component } from '@angular/core';
import { Header } from "../header/header";
import { AboutMe } from "../about-me/about-me";
import { Skills } from "../skills/skills";
import { Projects } from "../projects/projects";
import { Other } from "../other/other";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home-page',
  imports: [Header, AboutMe, Skills, Projects, Other, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
