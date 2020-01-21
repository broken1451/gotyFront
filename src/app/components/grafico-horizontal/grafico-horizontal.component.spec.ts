import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoHorizontalComponent } from './grafico-horizontal.component';

describe('GraficoHorizontalComponent', () => {
  let component: GraficoHorizontalComponent;
  let fixture: ComponentFixture<GraficoHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
