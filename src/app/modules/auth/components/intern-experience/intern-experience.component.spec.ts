import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternExperienceComponent } from './intern-experience.component';

describe('InternExperienceComponent', () => {
  let component: InternExperienceComponent;
  let fixture: ComponentFixture<InternExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
