import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratekeyComponent } from './generatekey.component';

describe('GeneratekeyComponent', () => {
  let component: GeneratekeyComponent;
  let fixture: ComponentFixture<GeneratekeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratekeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratekeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
