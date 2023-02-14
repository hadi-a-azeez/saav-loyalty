export const modelCustomersData = (data: any) => {
  const customers = data.map((customer: any) => {
    const { id, name, number, dob, pant_size, shirt_size } = customer;
    return {
      key: id,
      name,
      number,
      //calculate age from dob
      age: dob,
      pant_size,
      shirt_size,
    };
  });
  return customers;
};

//write an interface for the data
export interface ICustomers {
  key: string;
  name: string;
  number: string;
  age: string;
  pant_size: string;
  shirt_size: string;
}

//how to write return type for a function
