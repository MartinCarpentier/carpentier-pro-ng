import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffiehellmannComponent } from './diffiehellmann.component';

describe('DiffiehellmannComponent', () => {
  let component: DiffiehellmannComponent;
  let fixture: ComponentFixture<DiffiehellmannComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffiehellmannComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffiehellmannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
