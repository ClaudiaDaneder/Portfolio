import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
 icons = ['Rest-API', 'Git', 'HTML', 'CSS', 'TypeScript', 'Angular', 'Firebase', 'Scrum', 'JavaScript', 'SCSS'];
}
