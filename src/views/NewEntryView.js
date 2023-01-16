import React from 'react';
import { Flex, Heading, Divider, useMediaQuery } from '@chakra-ui/react';
import NuevaEntrada from '../Components/NuevaEntrada/NuevaEntrada';

const NewEntryView = () => {
	const [isDesktop] = useMediaQuery('(min-width: 600px)');
	let customHight = window.innerHeight;

	return (
		<Flex
			bgColor='color.fondo'
			w='100vw'
			h={isDesktop ? '100vh' : customHight}
			paddingTop={10}
			paddingLeft={10}
			paddingBottom={10}
			flexDir='column'
			overflow='hidden'
		>
			<Heading
				marginLeft={isDesktop ? '90px' : '50px'}
				size={isDesktop ? 'lg' : 'md'}
				color='color.primario'
				fontFamily='font.regular'
			>
				Crear nueva entrada 📃
			</Heading>
			<Divider
				marginLeft={isDesktop ? '90px' : '50px'}
				marginTop={2}
				borderColor='color.secundario'
				w='80%'
			/>
			<NuevaEntrada />
		</Flex>
	);
};

export default NewEntryView;
