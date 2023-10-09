export interface Product {
    id: string,
    name: string,
    description: string,
    image:string,
    price: number,
    category: {id:string,name:string},
    onSale: boolean
};
  