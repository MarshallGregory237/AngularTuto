import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user-component/user-component.component';
import { CookieRecipe } from './components/cookie-recipe/cookie-recipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    CookieRecipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  isLogged = true;

  isServerRunning = true;

  operatingSystems = [
    {id: 'win', name:'windows'},
    {id: 'osf', name:'linux'}
  ]

  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'}
  ]

}
