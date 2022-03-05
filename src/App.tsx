import React from 'react';
import { ProductProvider } from './contexts/ProductContext';
import ListView from './views/ListView';

export default function App() {
	return (
		<div className='App'>
			<ProductProvider>
				<ListView />
			</ProductProvider>
		</div>
	);
}
