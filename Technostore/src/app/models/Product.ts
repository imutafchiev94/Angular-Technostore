import { Category } from './Category';

export interface Product {
    id: number;
    modelName: string;
    brand:string;
    categoryId: number;
    category: Category;
    slug:string;
    cpuModel:string;
    ram:string;
    storage:string;
    price: number;
    videoCardModel: string;
    videoCardMemory: number;
    productImageUrl: string;
    os: string;
    frontCamera: string;
    backCamera: string;
    display: string
    weight: number;
    usb: string;
    ports: string;
    hdmi: boolean;
    battery: string;
    authorId: string; 
    authorName: string;
}