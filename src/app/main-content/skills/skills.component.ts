import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
 icons = ['HTML', 'CSS', 'JavaScript', 'Git', 'Rest-API', 'TypeScript', 'Angular', 'Firebase', 'Scrum', 'SCSS'];
}
