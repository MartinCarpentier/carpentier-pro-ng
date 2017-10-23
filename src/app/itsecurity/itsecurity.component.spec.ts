import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsecurityComponent } from './itsecurity.component';

describe('ItsecurityComponent', () => {
  let component: ItsecurityComponent;
  let fixture: ComponentFixture<ItsecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItsecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
