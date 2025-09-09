import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ParagraphModel } from 'src/app/models/paragraph.model';
import { SectionModel } from 'src/app/models/section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  animations: [
        trigger('collapseExpand', [
          state('collapsed', style({ height: '0', overflow: 'hidden' })),
          state('expanded', style({ height: '*', overflow: 'hidden' })),
          transition('collapsed <=> expanded', animate('300ms ease-in-out'))
        ])
      ]
})
export class SectionComponent implements OnInit {

  @Output() event = new EventEmitter<SectionModel>();
  @Input() model!: SectionModel;
  isCollapsed: boolean = true;
  isEditMode: boolean = false;
  toggleButtonText: string = 'arrow_drop_down';
  isEditHeading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;

    if (this.isCollapsed) {
      this.toggleButtonText = 'arrow_drop_down';
    } else {
      this.toggleButtonText = 'arrow_drop_up'
    }
    this.save();
  }

  add() {
    this.model.addParagraph(new ParagraphModel());
  }

  addBulleted() {
    let p = new ParagraphModel();
    p.isBulleted = true;
    this.model.addParagraph(p);
  }

  editHeading() { 
    this.isEditHeading = !this.isEditHeading;
    this.edit();
  }
  edit() {
    this.isEditMode = !this.isEditMode;
  }

  save() {
    this.event.emit(this.model);
    console.log(this.model);
  }

  clear() {
    this.model.delete();
  }

}
