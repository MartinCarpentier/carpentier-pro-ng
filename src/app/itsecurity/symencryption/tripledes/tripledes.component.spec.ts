import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripledesComponent } from './tripledes.component';

describe('TripledesComponent', () => {
  let component: TripledesComponent;
  let fixture: ComponentFixture<TripledesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripledesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripledesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
