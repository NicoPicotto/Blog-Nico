import React from 'react';
import {
	Flex,
	Avatar,
	Menu,
	Link,
	MenuButton,
	useMediaQuery,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { FiHome, FiPlus, FiLogOut } from 'react-icons/fi';
import { UserAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const Sidebar = () => {
	const { logout, user } = UserAuth();
	const navigate = useNavigate();
	const [isDesktop] = useMediaQuery('(min-width: 600px)');
	let customHight = window.innerHeight

	//Función que deslogea y lleva a la pantalla de login nuevamente
	const deslogear = async () => {
		try {
			await logout(auth);
			await !user && navigate('/');
		} catch (e) {
			console.log('Logout');
		}
	};

	return (
		<Flex
			pos='fixed'
			left='5'
			h={customHight*0.95}
			marginTop={5}
			marginBottom={5}
			alignItems='center'
			boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
			borderRadius='15px'
			w={isDesktop ? '75px' : '50px'}
			flexDir='column'
			justifyContent='space-between'
			bgColor='color.primario'
		>
			<Flex p='5%' flexDir='column' w='100%' alignItems='center' as='nav'>
				<Flex mt={4} flexDir='column' w='100%' alignItems='center' gap={5}>
					<Menu placement='right'>
						<Link
							p={3}
							fontFamily='font.regular'
							color='white'
							borderRadius={8}
							_hover={{ color: 'color.primario', background: 'color.fondo' }}
							as={ReachLink}
							to={'/panel'}
						>
							<MenuButton w='100%'>
								<Flex alignItems='center'>
									<FiHome />
								</Flex>
							</MenuButton>
						</Link>
					</Menu>
					<Menu placement='right'>
						<Link
							p={3}
							fontFamily='font.regular'
							color='white'
							borderRadius={8}
							_hover={{ color: 'color.primario', background: 'color.fondo' }}
							as={ReachLink}
							to={'/nueva'}
						>
							<MenuButton w='100%'>
								<Flex alignItems='center'>
									<FiPlus />
								</Flex>
							</MenuButton>
						</Link>
					</Menu>
					<Menu placement='right'>
						<Link
							p={3}
							fontFamily='font.regular'
							color='white'
							borderRadius={8}
							_hover={{ color: 'color.primario', background: 'color.fondo' }}
							as={ReachLink}
							to={'/'}
						>
							<MenuButton w='100%' onClick={deslogear}>
								<Flex alignItems='center'>
									<FiLogOut />
								</Flex>
							</MenuButton>
						</Link>
					</Menu>
				</Flex>
			</Flex>
			<Flex p='5%' flexDir='column' w='100%' alignItems='center' mb={4}>
				<Flex mt={4} align='center'>
					<Avatar size='sm' src='assets/Captura.png' />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Sidebar;
