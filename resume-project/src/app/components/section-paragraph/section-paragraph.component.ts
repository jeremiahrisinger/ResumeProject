import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ParagraphModel } from 'src/app/models/paragraph.model';

@Component({
    selector: 'app-section-paragraph',
    templateUrl: './section-paragraph.component.html',
    styleUrls: ['./section-paragraph.component.scss'],
    standalone: false
})
export class SectionParagraphComponent implements OnInit {
  @Input() text: string = '';
  @Input() columns: number = 1;
  @Input() isEditMode: boolean = false;
  @Input() model!: ParagraphModel;

  @Output() event = new EventEmitter<ParagraphModel>();

  constructor() { }

  ngOnInit(): void {

  }

  edit() {
    this.isEditMode = !this.isEditMode;
  }

  save() {
    this.event.emit(this.model);
    console.log(this.model);
    this.isEditMode = false;

    this.model.paragraphBodies = this.model.paragraphBodies.filter(a => a !== "")

    console.log(this.model);
  }

  add() {
    this.model.addParagraph('');
    this.isEditMode = true;
  }

  clear() {
    this.model.paragraphBodies = []
  }

  toggleBullets() {
    this.model.isBulleted = !this.model.isBulleted;
  }

  emit() {
    this.event.emit(this.model);
  }

  trackByFn(index: number, item: any): any {
    return item.id;
  }

}
