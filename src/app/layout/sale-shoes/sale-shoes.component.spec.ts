import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleShoesComponent } from './sale-shoes.component';

describe('SaleShoesComponent', () => {
  let component: SaleShoesComponent;
  let fixture: ComponentFixture<SaleShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleShoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
