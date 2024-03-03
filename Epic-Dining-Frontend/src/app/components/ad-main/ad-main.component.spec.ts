import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMainComponent } from './ad-main.component';

describe('AdMainComponent', () => {
  let component: AdMainComponent;
  let fixture: ComponentFixture<AdMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdMainComponent]
    });
    fixture = TestBed.createComponent(AdMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
