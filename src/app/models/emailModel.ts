export class EmailModel {
  id: number;
  name: string;
  object: string;
  content: string;
  language: string;
  emailType_id: any;

  constructor() {
    this.name = '';
    this.content = '';
    this.object = '';
    this.language = 'fr';
    this.emailType_id = 1;
  }
}
