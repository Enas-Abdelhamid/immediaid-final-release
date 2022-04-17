import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidProviderCreateComponent } from './aid-provider-create.component';

describe('AidProviderCreateComponent', () => {
  let component: AidProviderCreateComponent;
  let fixture: ComponentFixture<AidProviderCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AidProviderCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AidProviderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
