import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueriesComponent } from './enqueries.component';

describe('EnqueriesComponent', () => {
  let component: EnqueriesComponent;
  let fixture: ComponentFixture<EnqueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnqueriesComponent]
    });
    fixture = TestBed.createComponent(EnqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
