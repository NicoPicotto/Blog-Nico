import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme/theme';
import Sidebar from './Components/Sidebar/Sidebar';
import DashboardView from './views/DashboardView';
import NewEntryView from './views/NewEntryView';
import EditEntryView from './views/EditEntryView';
import LoginView from './views/LoginView';
import RutasProtegidas from './Components/RutasProtegidas/RutasProtegidas';
import { AuthContextProvider } from './AuthContext';

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<AuthContextProvider>
					<Routes>
						<Route path='/' element={<LoginView />} />
						<Route
							path='/panel'
							element={
								<RutasProtegidas>
									<Sidebar />
									<DashboardView />{' '}
								</RutasProtegidas>
							}
						/>
						<Route
							path='/nueva'
							element={
								<RutasProtegidas>
									<Sidebar />
									<NewEntryView />{' '}
								</RutasProtegidas>
							}
						/>
						<Route
							path='/:id'
							element={
								<RutasProtegidas>
									<Sidebar />
									<EditEntryView />{' '}
								</RutasProtegidas>
							}
						/>
					</Routes>
				</AuthContextProvider>
			</Router>
		</ChakraProvider>
	);
};

export default App;
