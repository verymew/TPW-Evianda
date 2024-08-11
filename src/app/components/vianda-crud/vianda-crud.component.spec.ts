import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViandaCrudComponent } from './vianda-crud.component';

describe('ViandaCrudComponent', () => {
  let component: ViandaCrudComponent;
  let fixture: ComponentFixture<ViandaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViandaCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViandaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
