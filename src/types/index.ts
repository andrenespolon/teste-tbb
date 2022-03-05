export interface Image {
	alt: string;
	src: string;
}

export interface Category {
	id: string;
	name: string;
}

export interface Product {
	id: string;
	name: string;
	shortDescription: string;
	category: Category;
	images: Array<Image>;
}
