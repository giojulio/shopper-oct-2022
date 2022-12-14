import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL';


const useShoppingList = () => {
	const [shoppingList, setShoppingList] = useState([]);

	useEffect(() => {
		const id = localStorage.getItem('id')
		axios
			.get(`${BASE_URL}/shp-list/${id}`)
			.then((response) => {
				setShoppingList(response.data.shoppingList);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, [shoppingList]);

	return shoppingList;
};

export default useShoppingList;
