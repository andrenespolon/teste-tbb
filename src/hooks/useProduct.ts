import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

export default function useProduct() {
	return useContext(ProductContext);
}
