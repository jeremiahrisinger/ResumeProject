export class ParagraphModel {
  paragraphHeader: string = '';
  paragraphBodies: Array<string> = [];
  isBulleted: boolean = false;
  numberOfColumns: number = 1;

  addParagraph(text: string) {
    this.paragraphBodies.push(text);
  }
}
