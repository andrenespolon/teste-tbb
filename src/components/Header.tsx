import React from 'react';
import styled from 'styled-components';
import { FiFeather } from 'react-icons/fi';

const Container = styled.div`
	padding: 16px 64px;
	border-bottom: 1px solid #30303020;
	color: #303030;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	@media (max-width: 800px) {
		justify-content: center;
	}
	span {
		padding-left: 8px;
		font-weight: bold;
	}
`;

export default function Header() {
	return (
		<Container>
			<FiFeather color='inhite' size={32} />
			<span>KeepDry</span>
		</Container>
	);
}
