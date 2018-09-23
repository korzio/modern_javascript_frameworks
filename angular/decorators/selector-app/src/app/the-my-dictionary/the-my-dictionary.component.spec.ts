import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMyDictionaryComponent } from './the-my-dictionary.component';

describe('TheMyDictionaryComponent', () => {
  let component: TheMyDictionaryComponent;
  let fixture: ComponentFixture<TheMyDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheMyDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheMyDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
