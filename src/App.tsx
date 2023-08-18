import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Global/Layout';
import { Login } from './components/Pages/Login';

function App() {
	return (
		<ChakraProvider>
			<Layout>
				<Login />
			</Layout>
		</ChakraProvider>
	);
}

export default App;
