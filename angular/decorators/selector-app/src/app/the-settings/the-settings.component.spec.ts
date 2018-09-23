import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSettingsComponent } from './the-settings.component';

describe('TheSettingsComponent', () => {
  let component: TheSettingsComponent;
  let fixture: ComponentFixture<TheSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
