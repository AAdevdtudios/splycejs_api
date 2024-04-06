export type ApiError={
    message?: string;
    code?: number;
    success: boolean;
}
export type DeleteMessage={
  message?: string
}
export type CreateAccountType = {
  index: string;
  account_name: string;
  account_number: string;
  bank_code: string;
}
export type UpdateAccountType = {
  index?: string;
  account_name?: string;
  account_number?: string;
}
type BankInfo = {
  id: number;
  bank_name: string;
  bank_code: string;
  country: number;
};

export type ResponseAccount = {
  index: string;
  account_name: string;
  account_number: string;
  bank: BankInfo;
  unique_code: string;
};

export interface Country {
  id: number;
  name: string;
  short_name: string;
}

export interface Bank {
  id: number;
  bank_name: string;
  bank_code: string;
  country: Country;
}