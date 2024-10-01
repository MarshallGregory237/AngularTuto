import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'cookie-recipe',
  standalone: true,
  imports: [],
  templateUrl: './cookie-recipe.component.html',
  styleUrl: './cookie-recipe.component.css'
})
export class CookieRecipe {

  count = signal(0);

  butter = computed(() => this.count() * 0.1);

  sugar = computed(() => this.count() * 0.05);

  flour = computed(() => this.count() * 0.2);

  update(event: Event) {
    const input = event.target as HTMLInputElement;
    this.count.set(parseInt(input.value));
  }

}
