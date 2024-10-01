import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieRecipe } from './cookie-recipe.component';

describe('CookieRecipe', () => {
  let component: CookieRecipe;
  let fixture: ComponentFixture<CookieRecipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieRecipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookieRecipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
