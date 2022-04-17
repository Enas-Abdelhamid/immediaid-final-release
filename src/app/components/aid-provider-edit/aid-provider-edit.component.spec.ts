import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidProviderEditComponent } from './aid-provider-edit.component';

describe('AidProviderEditComponent', () => {
  let component: AidProviderEditComponent;
  let fixture: ComponentFixture<AidProviderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AidProviderEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AidProviderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
