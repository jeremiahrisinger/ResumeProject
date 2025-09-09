import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParagraphModel } from 'src/app/models/paragraph.model';

@Component({
  selector: 'app-section-bullet-list',
  templateUrl: './section-bullet-list.component.html',
  styleUrls: ['./section-bullet-list.component.scss']
})
export class SectionBulletListComponent implements OnInit {

  @Input() bullets: string[] = [];
  @Input() columns: number = 1;
  @Input() model!: ParagraphModel;
  @Input() isEditMode: boolean = false;


  @Output() event = new EventEmitter<ParagraphModel>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.model.addParagraph('')
    this.isEditMode = true;
  }

  edit() {
    this.isEditMode = !this.isEditMode;
  }

  clear() {
    this.model.paragraphBodies = []
  }

  save() {
    this.event.emit(this.model);
    console.log(this.model);
    this.isEditMode = false;
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
