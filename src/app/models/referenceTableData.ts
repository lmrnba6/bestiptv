export class ReferenceTableData {
  id: number;
  code: string;
  label: string;
  description: string;
  order: any;
  default: boolean;

  constructor() {
    this.default = false;
    this.code = '';
    this.label = '';
    this.description = '';
    // this.order = 0;
  }
}
