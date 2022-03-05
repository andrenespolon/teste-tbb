import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';
import { Category } from '../types';

type FilterCategoriesProps = {
	categories: Array<Category> | null;
	categoryIdSelected: string;
	onSelectCategory(category: Category): void;
};

const Container = styled.div`
	padding: 16px 64px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	@media (max-width: 800px) {
		padding: 16px;
		flex-direction: column;
		justify-content: center;
	}
`;

const ButtonCategories = styled.button<{ opened?: boolean }>`
	padding: 8px 32px;
	border-radius: 6px;
	border: solid 1px #30303020;
	background-color: transparent;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	min-height: 48px;
	color: ${({ opened }) => (opened ? '#303030' : '#30303095')};
	@media (max-width: 800px) {
		padding: 16px 32px;
		min-height: 56px;
	}
	svg {
		transition: all ease 0.5s;
		transform: ${({ opened }) => (opened ? 'rotate(180deg)' : 'rotate(0deg)')};
		@media (max-width: 800px) {
			transform: ${({ opened }) =>
				opened ? 'rotate(-90deg)' : 'rotate(90deg)'};
		}
	}
	span {
		transition: all ease 0.5s;
		font-size: 12px;
		font-weight: bold;
		letter-spacing: 0.6px;
		padding-left: ${({ opened }) => (opened ? '16px' : '8px')};
		@media (max-width: 800px) {
			padding-left: 8px;
			font-size: 14px;
		}
	}
`;

const ItemContainer = styled.div<{ opened?: boolean }>`
	transition: all ease 0.5s, opacity ease 0.6s;
	padding: 8px 16px;
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: nowrap;
	overflow: hidden;
	opacity: ${({ opened }) => (opened ? 1 : 0)};
	width: ${({ opened }) => (opened ? '100%' : '0px')};
	@media (max-width: 800px) {
		align-items: center;
		justify-content: center;
		height: ${({ opened }) => (opened ? '56px' : '0px')};
		width: 100%;
	}
`;

const ItemTag = styled.div<{ selected: boolean }>`
	transition: all ease 0.3s;
	padding: 4px 8px;
	border-radius: 6px;
	border: solid 1px #30303020;
	font-size: 14px;
	margin-right: 16px;
	letter-spacing: 0.8px;
	background-color: #fff;
	white-space: nowrap;
	cursor: pointer;
	color: ${({ selected }) => (selected ? '#fff' : '#30303095')};
	box-shadow: ${({ selected }) => (selected ? '0px 0px 6px #0002' : 'none')};
	background-color: ${({ selected }) => (selected ? '#303030' : '#fff')};
	&:hover {
		color: #fff;
		box-shadow: 0px 0px 6px #0002;
		background-color: #303030;
	}
	@media (max-width: 800px) {
		margin: 8px;
	}
`;

export default function FilterCategories({
	categories,
	categoryIdSelected,
	onSelectCategory,
}: FilterCategoriesProps) {
	const [isOpened, setIsOpened] = useState<boolean>(false);

	return (
		<Container>
			<ButtonCategories
				opened={isOpened}
				onClick={() => setIsOpened(!isOpened)}>
				<FiChevronRight size={18} />
				<span>Categories</span>
			</ButtonCategories>
			<ItemContainer opened={isOpened}>
				{!!categories &&
					categories.map((ele) => (
						<ItemTag
							onClick={() => onSelectCategory(ele)}
							key={ele.id}
							selected={ele.id === categoryIdSelected}>
							{ele.name}
						</ItemTag>
					))}
			</ItemContainer>
		</Container>
	);
}
