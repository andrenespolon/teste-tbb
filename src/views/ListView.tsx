import React, { useEffect } from 'react';
import styled from 'styled-components';
import FilterCategories from '../components/FilterCategories';
import Header from '../components/Header';
import ListProducts from '../components/ListProducts';
import useProduct from '../hooks/useProduct';

const Container = styled.div`
	background: linear-gradient(135deg, #f7f6f1, #e2dfd4);
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;
`;

export default function ListView() {
	const { products, categories, categoryIdSelected, filterProductsByCategory } =
		useProduct();

	useEffect(() => console.log(products), [products]);

	return (
		<Container>
			<Header />
			<FilterCategories
				categories={categories}
				categoryIdSelected={categoryIdSelected}
				onSelectCategory={filterProductsByCategory}
			/>
			<ListProducts products={products} />
		</Container>
	);
}
