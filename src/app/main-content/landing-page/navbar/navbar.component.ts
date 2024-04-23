import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  closeSidebar(): void {
    const checkbox = document.querySelector('#toggle-sidebar') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false; // Close the sidebar when a link is clicked
    }
  }
}
