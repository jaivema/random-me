export interface User {
  login: any;
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  email: string;
  phone: string;
  dob: {
    date: string;
    age: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export const initFilters={
  numberUsers: 4,
  gender: "",
  nat: "",
}
export type Filters = typeof initFilters;

export type ErrorState = {
  error: {
    message: string;
    name: string;
  } 
  | null;
};
