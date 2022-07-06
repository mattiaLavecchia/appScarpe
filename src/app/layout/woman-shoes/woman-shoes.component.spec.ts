import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanShoesComponent } from './woman-shoes.component';

describe('WomanShoesComponent', () => {
  let component: WomanShoesComponent;
  let fixture: ComponentFixture<WomanShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomanShoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
