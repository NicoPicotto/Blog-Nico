import React, { useState } from 'react';
import { Flex, Input, Textarea, Button, useMediaQuery } from '@chakra-ui/react';

const Editar = ({ titulo, mensaje, id, handleDelete, handleUpdate }) => {
	const [isDesktop] = useMediaQuery('(min-width: 600px)');

	const [nuevoTitulo, setNuevoTitulo] = useState(titulo);
	const [nuevoMensaje, setNuevoMensaje] = useState(mensaje);

	return (
		<Flex
			as='form'
			flexDir='column'
			w='100vw'
			marginLeft={isDesktop ? '90px' : '50px'}
			alignItems='flex-start'
			justifyContent='flex-start'
			marginTop={5}
		>
			<Input
				placeholder='Ingresar título'
				w={isDesktop ? '80%' : '65%'}
				size={isDesktop ? 'lg' : 'sm'}
				border='none'
				_focus={{
					outline: 'none',
					borderColor: 'inherit',
					boxShadow: 'none',
					bgColor: 'white',
				}}
				type='text'
				value={nuevoTitulo}
				onChange={(e) => setNuevoTitulo(e.target.value)}
				marginBottom={2}
				fontFamily='font.regular'
				fontWeight='600'
			/>
			<Textarea
				placeholder='Mensaje'
				w={isDesktop ? '80%' : '65%'}
				size={isDesktop ? 'md' : "sm"}
				border='none'
				_focus={{
					outline: 'none',
					borderColor: 'inherit',
					boxShadow: 'none',
					bgColor: 'white',
				}}
				type='text'
				borderRadius={5}
				value={nuevoMensaje}
				onChange={(e) => setNuevoMensaje(e.target.value)}
				marginBottom={2}
				fontFamily='font.regular'
				rows='20'
			/>
			<Flex gap={2} flexDir={isDesktop ? 'row' : 'column'}>
				<Button
					bgColor='color.secundario'
					onClick={() => handleUpdate(id, nuevoTitulo, nuevoMensaje)}
					fontFamily='font.regular'
					size={isDesktop ? 'lg' : "sm"}
					marginTop={2}
					borderRadius={5}
					_focus={{ bgColor: 'color.primario' }}
					_after={{ bgColor: 'color.primario' }}
					_hover={{ bgColor: 'color.primario', color: 'white' }}
				>
					Actualizar entrada 🔄
				</Button>
				<Button
					bgColor='#EB6A69'
					onClick={() => handleDelete(id)}
					fontFamily='font.regular'
					size={isDesktop ? 'lg' : "sm"}
					marginTop={2}
					borderRadius={5}
					_focus={{ bgColor: '#D9211E' }}
					_after={{ bgColor: '#D9211E' }}
					_hover={{ bgColor: '#D9211E', color: 'white' }}
				>
					Eliminar entrada 🗑️
				</Button>
			</Flex>
		</Flex>
	);
};

export default Editar;
