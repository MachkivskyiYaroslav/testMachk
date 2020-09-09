export interface IApatrment {
  type: string;
  id: number;
  img: string;
  attributes: {
    title: string,
    rooms: number,
    address: {
      city: string,
      street: string,
      house: string,
      room: number
    },
    area: number,
    unit: string
  };
  relationships: {
    type: string,
    id: number,
    attributes: {
      first_name: string,
      last_name: string,
      middle_name: string
    }
  };
}
