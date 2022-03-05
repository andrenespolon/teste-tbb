import React from 'react';
import styled from 'styled-components';
import { Product } from '../types';

type ListProductsProps = {
	products: Array<Product> | null;
};

const Container = styled.div`
	display: grid;
	grid-gap: 48px;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	padding: 16px 64px;
	color: #303030;
	transition: all ease 0.3s;
	@media (max-width: 800px) {
		padding: 0px 16px;
		grid-gap: 16px;
	}
`;

const Item = styled.div`
	transition: all ease 0.3s;
	border: 1px solid #30303020;
	border-radius: 8px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	background-color: #fff;
	span {
		padding-top: 16px;
		font-size: 14px;
		padding: 24px;
	}
	div {
		display: flex;
		justify-content: center;
		width: 100%;
		padding: 24px;
		img {
			transition: all ease 0.3s;
			max-width: 200px;
			height: auto;
			@media (max-width: 800px) {
				max-height: 200px;
				width: auto;
			}
		}
	}
	&:hover {
		box-shadow: 0px 0px 16px #0002;
	}
	&:hover > div img {
		transform: scale(1.05);
	}
`;

export default function ListProducts({ products }: ListProductsProps) {
	return (
		<Container>
			{!!products &&
				products.map((ele) => (
					<Item key={ele.id}>
						<div>
							<img src={ele.images[0].src} alt={ele.images[0].alt} />
						</div>
						<span>{ele.name}</span>
					</Item>
				))}
		</Container>
	);
}
