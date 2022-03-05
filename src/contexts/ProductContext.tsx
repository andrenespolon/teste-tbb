import React, { useState, useCallback, createContext, useEffect } from 'react';
import source from '../services/data.json';
import { Category, Product } from '../types';

type ContextProps = {
	products: Array<Product> | null;
	categories: Array<Category> | null;
	categoryIdSelected: string;
	productSelected: Product | null;
	fetchAllProducts(): void;
	fetchAllCategories(): void;
	filterProductsByCategory(category: Category): void;
};

type ProviderProps = {
	children: React.ReactNode;
};

export const ProductContext = createContext({} as ContextProps);

export function ProductProvider({ children }: ProviderProps) {
	const [products, setProducts] = useState<Array<Product> | null>(null);
	const [categories, setCategories] = useState<Array<Category> | null>(null);
	const [productSelected, setProductSelected] = useState<Product | null>(null);
	const [categoryIdSelected, setCategoryIdSelected] = useState<string>('0');

	const fetchAllProducts = useCallback(() => {
		const { nodes } = source.data;
		setProducts(nodes);
	}, []);

	const fetchAllCategories = useCallback(() => {
		const { nodes } = source.data;
		const c: Array<Category> = [
			{
				id: '0',
				name: 'All',
			},
		];
		nodes.map((ele) => {
			if (!c.some((e) => e.id === ele.category.id)) {
				c.push(ele.category);
			}
		});
		setCategories(c);
	}, []);

	const filterProductsByCategory = useCallback((category: Category) => {
		const { nodes } = source.data;
		setCategoryIdSelected(category.id);
		if (category.id === '0') {
			return setProducts(nodes);
		}
		const p = nodes.filter((ele) => ele.category.id === category.id);
		return setProducts(p);
	}, []);

	useEffect(() => {
		fetchAllProducts();
		fetchAllCategories();
	}, []);

	return (
		<ProductContext.Provider
			value={{
				products,
				categories,
				categoryIdSelected,
				productSelected,
				fetchAllProducts,
				fetchAllCategories,
				filterProductsByCategory,
			}}>
			{children}
		</ProductContext.Provider>
	);
}
