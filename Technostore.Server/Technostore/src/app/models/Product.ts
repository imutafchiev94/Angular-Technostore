export interface Product {
    id: number;
    modelName: string;
    brand: string;
    description: string;
    categoryId: number;
    categoryName: string;
    slug: string;
    cpuModel: string;
    ram: number;
    storage: number;
    price: number;
    videoCardModel: string;
    videoCardMemory: number;
    productImageUrl: string;
    os: string;
    frontCamera: number;
    backCamera: number;
    display: number
    weight: number;
    usb: string;
    ports: string;
    hdmi: boolean;
    battery: string;
    authorId: string; 
    authorName: string;
}