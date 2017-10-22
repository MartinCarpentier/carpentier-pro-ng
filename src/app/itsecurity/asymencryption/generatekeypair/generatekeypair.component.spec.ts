import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratekeypairComponent } from './generatekeypair.component';

describe('GeneratekeypairComponent', () => {
  let component: GeneratekeypairComponent;
  let fixture: ComponentFixture<GeneratekeypairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratekeypairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratekeypairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
