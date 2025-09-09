import { ParagraphModel } from "./paragraph.model";

export class SectionModel {
  
  heading: string = '';
  paragraphs: Array<ParagraphModel> = [];

  addParagraph(paragraph: ParagraphModel) {
    this.paragraphs.push(paragraph)
  }

  delete() {
    this.paragraphs = [];
    this.heading = ''
  } 
}


