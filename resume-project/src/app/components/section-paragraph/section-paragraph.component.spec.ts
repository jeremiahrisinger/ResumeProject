import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionParagraphComponent } from './section-paragraph.component';

describe('SectionParagraphComponent', () => {
  let component: SectionParagraphComponent;
  let fixture: ComponentFixture<SectionParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
