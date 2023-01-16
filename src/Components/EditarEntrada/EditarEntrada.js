import React, { useEffect, useState } from 'react';
import {
	collection,
	query,
	getDocs,
	where,
	documentId,
	doc,
	serverTimestamp,
	updateDoc,
	deleteDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate, useParams } from 'react-router';
import { useToast } from '@chakra-ui/react';
import Editar from '../Editar/Editar';

const EditarEntrada = () => {
	const [entrada, setEntrada] = useState([]);
	const paramsID = useParams();
	const navigate = useNavigate();
	const toast = useToast();

	useEffect(() => {
		const getEntrada = async () => {
			const docs = [];
			const q = query(
				collection(db, 'blog-nico'),
				where(documentId(), '==', paramsID.id)
			);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setEntrada(docs);
		};
		getEntrada();
	}, [paramsID]);

	//Actualiza el documento actual y vuelve al Dashboard
	const handleUpdate = async (id, nuevoTitulo, nuevoMensaje) => {
		const entradaRef = doc(db, 'blog-nico', id);
		await updateDoc(entradaRef, {
			titulo: nuevoTitulo,
			mensaje: nuevoMensaje,
			fecha: serverTimestamp(),
		});

		toast({
			title: '¡Entrada actualizada! 😎',
			status: 'success',
			duration: 7000,
			isClosable: true,
			variant: 'top-accent',
		});

		navigate('/panel');
	};

	//Borra el documento actual y vuelve al Dashboard
	const handleDelete = async (id) => {
		await deleteDoc(doc(db, 'blog-nico', id));

		toast({
			title: '¡Entrada eliminada! 🙄',
			status: 'error',
			duration: 7000,
			isClosable: true,
			variant: 'top-accent',
		});

		navigate('/panel');
	};

	return (
		<>
			{entrada.map((entrada) => (
				<Editar
					key={entrada.id}
					id={entrada.id}
					titulo={entrada.titulo}
					mensaje={entrada.mensaje}
					handleDelete={handleDelete}
					handleUpdate={handleUpdate}
				/>
			))}
		</>
	);
};

export default EditarEntrada;
