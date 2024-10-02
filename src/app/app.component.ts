import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user-component/user-component.component';
import { CookieRecipe } from './components/cookie-recipe/cookie-recipe.component';
import { Props } from './components/props/props.component';
import { GestionEvent } from './components/gestion-event/gestion-event.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    CookieRecipe,
    Props,
    GestionEvent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  isMain = false;

  isLogged = false;

  isProps = false;

  isgestionEvent = false;

  isServerRunning = false;

  isCookieRecipe = false;

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
