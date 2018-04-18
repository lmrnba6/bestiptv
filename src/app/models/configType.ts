export class ConfigType {
  id: number;
  code: string;
  label: string;
  description: string;
  order: number;
  default: boolean;

  constructor() {
    this.default = false;
  }
}
