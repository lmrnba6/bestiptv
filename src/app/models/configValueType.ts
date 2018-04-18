export class ConfigValueType {
  id: number;
  code: string;
  label: string;
  description: string;
  order: number;
  default: boolean;
  valuesUrl: string;

  constructor() {
    this.default = false;
  }
}
