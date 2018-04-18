export class AdminUnitResponsible {
  id: number;
  name: string;
  email: string;
  principal: boolean;

  constructor() {
    this.principal = false;
    this.email = '';
    this.name = '';
  }
}
