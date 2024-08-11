import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequireAuthComponent } from './require-auth.component';

describe('RequireAuthComponent', () => {
  let component: RequireAuthComponent;
  let fixture: ComponentFixture<RequireAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequireAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequireAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
