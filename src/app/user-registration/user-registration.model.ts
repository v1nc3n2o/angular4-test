export interface UserRegistration {
  // id?: number;
  firstName: string;
  lastName: string;
  userName?: string;
  email: string;
  address?: Address;
  phone: string;
  website?: string;
  company?: Company;
}

export interface Address {
  street?: string;
  suite?: string;
  city?: string;
  zipCode?: string;
  state?: State;
  geo?: Geo;
}

export interface Geo {
  lat?: number;
  lng?: number;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface State {
  code: string;
  name: string;
}
