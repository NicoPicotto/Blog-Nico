import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { Flex, Spinner, useMediaQuery } from '@chakra-ui/react';
import Entrada from '../Entrada/Entrada';

const MostrarEntradas = () => {
	const [entradas, setEntradas] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isDesktop] = useMediaQuery('(min-width: 600px)');

	useEffect(() => {
		setLoading(true);
		const q = query(collection(db, 'blog-nico'), orderBy('fecha', 'desc'));
		const unsub = onSnapshot(q, (querySnapshot) => {
			let mjesArray = [];
			querySnapshot.forEach((doc) => {
				mjesArray.push({ ...doc.data(), id: doc.id });
			});
			setEntradas(mjesArray);
			setLoading(false);
		});

		return () => unsub();
	}, []);

	return (
		<Flex
			marginTop={5}
			overflowY='scroll'
			marginLeft={isDesktop ? '90px' : '50px'}
		>
			<Flex gap={5} flexWrap='wrap'>
				{entradas.map((entrada) => (
					<Entrada
						key={entrada.id}
						id={entrada.id}
						titulo={entrada.titulo}
						mensaje={entrada.mensaje}
						fecha={entrada.fecha}
					/>
				))}
				{loading && <Spinner margin={5} color='color.primario' />}
			</Flex>
		</Flex>
	);
};

export default MostrarEntradas;
