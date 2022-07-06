import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManShoesComponent } from './man-shoes.component';

describe('ManShoesComponent', () => {
  let component: ManShoesComponent;
  let fixture: ComponentFixture<ManShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManShoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
