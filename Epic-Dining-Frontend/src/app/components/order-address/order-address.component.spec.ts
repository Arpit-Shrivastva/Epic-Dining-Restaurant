import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAddressComponent } from './order-address.component';

describe('OrderAddressComponent', () => {
  let component: OrderAddressComponent;
  let fixture: ComponentFixture<OrderAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderAddressComponent]
    });
    fixture = TestBed.createComponent(OrderAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
