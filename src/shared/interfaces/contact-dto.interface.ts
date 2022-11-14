export interface ContactDto {
  ID?: number
  Role: string
  ParentBusinessRelationID?: number
  Info: BusinessRelation
}

interface BusinessRelation {
  ID?: number
  Name: string
  DefaultPhone: Phone
  DefaultEmail: Email
}

interface Email {
  ID?: number
  EmailAddress: string
}

interface Phone {
  ID?: number
  Number: string
}
