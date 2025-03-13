import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrediantsDetailComponent } from './ingrediants-detail.component';

describe('IngrediantsDetailComponent', () => {
  let component: IngrediantsDetailComponent;
  let fixture: ComponentFixture<IngrediantsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngrediantsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngrediantsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
