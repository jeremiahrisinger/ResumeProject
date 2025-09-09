import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBulletListComponent } from './section-bullet-list.component';

describe('SectionBulletListComponent', () => {
  let component: SectionBulletListComponent;
  let fixture: ComponentFixture<SectionBulletListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBulletListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBulletListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
