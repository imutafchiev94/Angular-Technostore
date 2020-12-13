import { Product } from './Product';

export interface Order {
    id: number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    address: string,
    city: string,
    country: string,
    postalCode: number
    products: Array<Product>;
}