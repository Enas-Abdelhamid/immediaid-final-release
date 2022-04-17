import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidProviderListComponent } from './aid-provider-list.component';

describe('AidProviderListComponent', () => {
  let component: AidProviderListComponent;
  let fixture: ComponentFixture<AidProviderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AidProviderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AidProviderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
