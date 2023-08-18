import { Box, Flex, useColorModeValue, Button, Image } from '@chakra-ui/react';

function Header() {
	return (
		<Box>
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 10 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}>
				<Flex flex={{ base: 1 }} justify={{ md: 'start' }}>
					<Image
						boxSize={'40px'}
						src='https://www.svgrepo.com/show/484623/pig-piggy-bank.svg'
						alt='piggy'
					/>
				</Flex>
				<Button
					fontSize={'sm'}
					fontWeight={600}
					color={'white'}
					bg={'#331D2C'}
					_hover={{
						bg: '#E48586',
					}}>
					Login
				</Button>
			</Flex>
		</Box>
	);
}

export default Header;
