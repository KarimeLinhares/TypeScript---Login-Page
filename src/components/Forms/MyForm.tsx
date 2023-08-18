import {
	Box,
	FormControl,
	FormLabel,
	InputGroup,
	InputRightElement,
	Stack,
	useColorModeValue,
	Text,
	Link,
	useToast,
} from '@chakra-ui/react';
import { MyInput } from '../Inputs/MyInput';
import { MyIconButton } from '../Buttons/MyIconButton';
import { useState } from 'react';
import { MyButton } from '../Buttons/MyButton';

export const MyForm = () => {
	const [showPassword] = useState(false);
	const [input, setInput] = useState('');

	const handleInputChange = (e: {
		target: { value: React.SetStateAction<string> };
	}) => setInput(e.target.value);

	const toast = useToast();
	const status = 'success';

	return (
		<Box
			rounded={'lg'}
			bg={useColorModeValue('white', 'gray.700')}
			boxShadow={'dark-lg'}
			p={8}>
			<Stack spacing={4}>
				<Box>
					<FormControl id='name'>
						<FormLabel color={'#331D2C'}>Nome</FormLabel>
						<MyInput type='name' value={input} onChange={handleInputChange} />
					</FormControl>
				</Box>
				<FormControl id='email'>
					<FormLabel color={'#331D2C'}>Email</FormLabel>
					<MyInput type='email' />
				</FormControl>
				<FormControl id='password'>
					<FormLabel color={'#331D2C'}>Senha</FormLabel>
					<InputGroup>
						<MyInput type={showPassword ? 'text' : 'password'} />
						<InputRightElement h={'full'}>
							<MyIconButton />
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<Stack spacing={10} pt={2}>
					<MyButton
						onClick={() =>
							toast({
								title: `Bem vindo(a) ${input}`,
								status: status,
								isClosable: true,
							})
						}>
						Entrar
					</MyButton>
				</Stack>
				<Stack pt={6} align={'center'}>
					<Text color={'#331D2C'}>
						Perdeu a Senha? <Link color={'#331D2C'}>Clique aqui!</Link>
					</Text>
				</Stack>
			</Stack>
		</Box>
	);
};
