import React, { useState } from 'react';
import {
	Flex,
	Heading,
	Divider,
	Input,
	Button,
	Text,
	useToast,
	useMediaQuery,
} from '@chakra-ui/react';
import { UserAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginView = () => {
	const { signIn } = UserAuth();
	const [isDesktop] = useMediaQuery('(min-width: 600px)');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const toast = useToast();
	let customHight = window.innerHeight;

	const login = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await signIn(loginEmail, loginPassword);
			navigate('/panel');
		} catch (error) {
			setError('Falló el logeo');
			toast({
				title: 'O pusiste algo mal o no sos Nico 🙄',
				status: 'error',
				duration: 7000,
				isClosable: true,
				variant: 'top-accent',
			});
		}
	};

	return (
		<Flex
			bgColor='color.fondo'
			w='100vw'
			h={isDesktop ? '100vh' : customHight}
			p='10'
			flexDir='column'
			overflow='hidden'
			alignItems='center'
			justifyContent='center'
		>
			<Flex
				w={isDesktop ? '30%' : '90%'}
				bgColor='white'
				borderRadius={10}
				h='fit-content'
				padding={isDesktop ? 4 : 2}
				shadow='md'
				alignItems='center'
				justifyContent='center'
				flexDir='column'
			>
				<Heading
					fontFamily='font.regular'
					size='lg'
					color='color.primario'
					margin={2}
				>
					¿Sos Nico? 🤔
				</Heading>
				<Divider borderColor='color.secundario' margin={2} w='80%' />
				<Input
					placeholder='Email'
					fontFamily='font.regular'
					w='80%'
					textAlign='center'
					bgColor='color.fondo'
					padding={2}
					margin={2}
					onChange={(e) => {
						setLoginEmail(e.target.value);
					}}
					size={isDesktop ? 'md' : 'sm'}
					border='none'
					_focus={{
						outline: 'none',
						borderColor: 'inherit',
						boxShadow: 'none',
					}}
					type='email'
				/>
				<Input
					placeholder='Contraseña'
					fontFamily='font.regular'
					w='80%'
					textAlign='center'
					bgColor='color.fondo'
					padding={2}
					margin={2}
					size={isDesktop ? 'md' : 'sm'}
					border='none'
					onChange={(e) => {
						setLoginPassword(e.target.value);
					}}
					_focus={{
						outline: 'none',
						borderColor: 'inherit',
						boxShadow: 'none',
					}}
					type='password'
				/>
				<Button
					onClick={login}
					size={isDesktop ? 'md' : 'sm'}
					bgColor='color.secundario'
					fontFamily='font.regular'
					margin={2}
					borderRadius={5}
					_focus={{ bgColor: 'color.secundario' }}
					_after={{ bgColor: 'color.secundario' }}
					_hover={{ bgColor: 'color.primario', color: 'white' }}
				>
					Entrar 🔑
				</Button>
				<Text
					fontFamily='font.regular'
					color='color.primario'
					margin={2}
					fontSize={isDesktop ? 'md' : 'xs'}
				>
					Si no sos Nico volá de acá 👋
				</Text>
			</Flex>
		</Flex>
	);
};

export default LoginView;
