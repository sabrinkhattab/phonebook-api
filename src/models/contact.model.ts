import {Entity, model, property} from '@loopback/repository';

@model()
export class Contact extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
    index: {
      unique: true,
    }
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<Contact>) {
    super(data);
  }
}

export interface ContactRelations {
  // describe navigational properties here
}

export type ContactWithRelations = Contact & ContactRelations;
