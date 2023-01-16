import { extendTheme } from '@chakra-ui/react';

const colors = {
	color: {
		primario: '#152659',
		secundario: '#77A0F2',
		fondo: '#F2F2F2',
	},
};

const fonts = {
	font: {
		regular: `'Montserrat', sans-serif;`,
		bold: `'Montserrat', sans-serif;`,
		italic: `'Montserrat', sans-serif;`,
	},
};

const theme = extendTheme({ colors, fonts });

export default theme;
