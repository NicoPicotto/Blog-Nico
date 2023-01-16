import React, { useEffect } from 'react';
import {
	Flex,
	Divider,
	Text,
	Heading,
	useMediaQuery,
	Link,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const Entrada = ({ titulo, mensaje, fecha, id }) => {
	const [isDesktop] = useMediaQuery('(min-width: 600px)');
	const fechaFormateada = fecha.toDate().toLocaleDateString('es-ES');

	return (
		<Link
			to={`/${id}`}
			as={ReachLink}
			padding={isDesktop ? 4 : 1}
			_hover={{ textDecor: 'none' }}
		>
			<Flex
				flexDir='column'
				bgColor='white'
				borderRadius={10}
				w={isDesktop ? '400px' : '250px'}
				h={isDesktop ? '300px' : '200px'}
				padding={4}
				shadow='md'
				transition='0.2s'
				justifyContent='space-between'
				_hover={{ boxShadow: 'xl', transform: 'scale(1.01)' }}
			>
				<Flex padding={1} flexDir='column'>
					<Heading
						size='sm'
						fontFamily='font.regular'
						color='color.primario'
						marginBottom={2}
						textOverflow='ellipsis'
						overflow='hidden'
						noOfLines={1}
					>
						{titulo}{' '}
					</Heading>
					<Divider borderColor='color.secundario' marginBottom={2} />
				</Flex>
				<Flex justifyContent='flex-start' h='100%'>
					<Text
						fontSize='sm'
						fontFamily='font.regular'
						marginBottom={1}
						textOverflow='ellipsis'
						overflow='hidden'
						noOfLines={4}
					>
						{mensaje}
					</Text>
				</Flex>
				<Flex padding={1} flexDir='column'>
					<Divider borderColor='color.secundario' marginBottom={2} />
					<Text fontSize='xs' fontFamily='font.regular' color='color.primario'>
						📅 {fechaFormateada}
					</Text>
				</Flex>
			</Flex>
		</Link>
	);
};

export default Entrada;
