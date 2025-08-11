export interface ContactDetails {
  phone: string[];
  email: string[];
  address: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface StoreHours {
  day: string;
  hours: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
