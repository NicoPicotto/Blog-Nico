import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import {
	Flex,
	Input,
	Textarea,
	Button,
	useMediaQuery,
	useToast,
} from '@chakra-ui/react';

const NuevaEntrada = () => {
	const [titulo, setTitulo] = useState('');
	const [mensaje, setMensaje] = useState('');
	const [isDesktop] = useMediaQuery('(min-width: 600px)');
	const navigate = useNavigate();
	const toast = useToast();

	//Guarda la nueva entrada en la base de datos y vuelve al Dashboard
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (mensaje !== '') {
			await addDoc(collection(db, 'blog-nico'), {
				titulo,
				mensaje,
				fecha: serverTimestamp(),
			});
			setTitulo('');
			setMensaje('');
		}

		toast({
			title: '¡Entrada creada! 😎',
			status: 'success',
			duration: 7000,
			isClosable: true,
			variant: 'top-accent',
		});

		navigate('/panel');
	};

	return (
		<Flex
			as='form'
			onSubmit={handleSubmit}
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
				bgColor='white'
				border='none'
				_focus={{
					outline: 'none',
					borderColor: 'inherit',
					boxShadow: 'none',
				}}
				type='text'
				value={titulo}
				onChange={(e) => setTitulo(e.target.value)}
				marginBottom={2}
				fontFamily='font.regular'
				fontWeight='600'
			/>
			<Textarea
				placeholder='Ingresar mensaje'
				w={isDesktop ? '80%' : '65%'}
				size={isDesktop ? 'md' : 'sm'}
				bgColor='white'
				border='none'
				_focus={{
					outline: 'none',
					borderColor: 'inherit',
					boxShadow: 'none',
				}}
				type='text'
				borderRadius={5}
				value={mensaje}
				onChange={(e) => setMensaje(e.target.value)}
				marginBottom={2}
				fontFamily='font.regular'
				rows='20'
			/>
			<Button
				bgColor='color.secundario'
				type='submit'
				fontFamily='font.regular'
				size={isDesktop ? 'lg' : 'sm'}
				marginTop={2}
				borderRadius={5}
				_focus={{ bgColor: 'color.primario' }}
				_after={{ bgColor: 'color.primario' }}
				_hover={{ bgColor: 'color.primario', color: 'white' }}
			>
				Guardar entrada 💾
			</Button>
		</Flex>
	);
};

export default NuevaEntrada;
