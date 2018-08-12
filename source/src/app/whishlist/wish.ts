export enum Status {
  FOUND,
  MAYBE,
  MISSING
}

export class Wish {
  name: string;
  status: Status;
}
