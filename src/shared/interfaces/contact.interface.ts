export interface Contact {
  InfoID: number
  UpdatedAt: string
  ID: number
  ParentBusinessRelationID: number
  StatusCode: number
  Role: string
  CreatedAt: string
  UpdatedBy: string
  Comment: string
  CreatedBy: string
  Deleted: boolean
  ParentBusinessRelation: BusinessRelation
  Info: BusinessRelation
  CustomValues: CustomValues
}

interface Address {
  CountryCode: string
  Country: string
  UpdatedAt: string
  ID: number
  Region: string
  AddressLine2: string
  AddressLine3: string
  StatusCode: number
  City: string
  PostalCode: string
  CreatedAt: string
  BusinessRelationID: number
  UpdatedBy: string
  CreatedBy: string
  Deleted: boolean
  AddressLine1: string
  BusinessRelation: BusinessRelation
  CustomValues: CustomValues
}

interface BankAccount {
  CompanySettingsID: number
  BankAccountType: string
  UpdatedAt: string
  ID: number
  Label: string
  BankAccountSettingsID: number
  AccountID: number
  AccountNumber: string
  Locked: boolean
  StatusCode: number
  IBAN: string
  CreatedAt: string
  BusinessRelationID: number
  UpdatedBy: string
  BankID: number
  CreatedBy: string
  Deleted: boolean
  BankAccountSettings: BankAccountSettings
  CustomValues: CustomValues
}

interface BankAccountSettings {
  UpdatedAt: string
  ID: number
  IsTaxAccount: boolean
  BalanceAvailableUpdatedAt: string
  StatusCode: number
  IntegrationStatus: number
  BalanceBookedUpdatedAt: string
  CreatedAt: string
  CurrencyCode: string
  BalanceAvailable: number
  BalanceBooked: number
  UpdatedBy: string
  IntegrationSettings: string
  CreatedBy: string
  Deleted: boolean
  CustomValues: CustomValues
}

interface BusinessRelation {
  InvoiceAddressID: number
  UpdatedAt: string
  ID: number
  DefaultBankAccountID: number
  StatusCode: number
  CreatedAt: string
  UpdatedBy: string
  Name: string
  DefaultPhoneID: number
  DefaultEmailID: number
  ShippingAddressID: number
  CreatedBy: string
  Deleted: boolean
  DefaultContactID: number
  DefaultContact: Contact
  Contacts: Contact[]
  Addresses: Address[]
  Phones: Phone[]
  Emails: Email[]
  BankAccounts: BankAccount[]
  InvoiceAddress: Address
  ShippingAddress: Address
  DefaultPhone: Phone
  DefaultEmail: Email
  DefaultBankAccount: BankAccount
  CustomValues: CustomValues
}

interface CustomValues {}

interface Email {
  EmailAddress: string
  UpdatedAt: string
  ID: number
  Description: string
  Type: string
  StatusCode: number
  CreatedAt: string
  BusinessRelationID: number
  UpdatedBy: string
  CreatedBy: string
  Deleted: boolean
  CustomValues: CustomValues
}

interface Phone {
  CountryCode: string
  UpdatedAt: string
  ID: number
  Description: string
  Type: string
  StatusCode: number
  CreatedAt: string
  BusinessRelationID: number
  UpdatedBy: string
  Number: string
  CreatedBy: string
  Deleted: boolean
  CustomValues: CustomValues
}
