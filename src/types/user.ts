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

export const initFilters = {
  numberUsers: 11,
  gender: "",
  nat: "",
  seed: ""
}
export type Filters = typeof initFilters;

export const initPagination = {
  seed: "",
  results: 1,
  page: 1,
  version: ""
}
export type PaginationState = typeof initPagination

export type Paginator = {
  seed: string,
  results: number,
  page: number,
  version: string
}

export type ErrorState = {
  error: {
    message: string;
    name: string;
  } | null;
};
