import { Heading, Stack, Text } from '@chakra-ui/react';
import { MyForm } from '../Forms/MyForm';

export const Login = () => {
	return (
		<Stack spacing={8} mx={'auto'} maxW={'lg'} py={6} px={6}>
			<Stack align={'center'}>
				<Heading fontSize={'4xl'} textAlign={'center'} color={'#331D2C'}>
					BEM VINDO DE VOLTA!
				</Heading>
				<Text fontSize={'lg'} color={'#331D2C'}>
					Coloque seus dados para acessar sua conta
				</Text>
			</Stack>
			<MyForm />
		</Stack>
	);
};
