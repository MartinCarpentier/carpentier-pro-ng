import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymencryptionComponent } from './symencryption.component';

describe('SymencryptionComponent', () => {
  let component: SymencryptionComponent;
  let fixture: ComponentFixture<SymencryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymencryptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymencryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
