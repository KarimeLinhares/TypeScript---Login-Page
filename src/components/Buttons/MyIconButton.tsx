import { Button } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export const MyIconButton = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Button
			variant={'ghost'}
			_hover={{ bg: 'transparent' }}
			onClick={() => setShowPassword((showPassword) => !showPassword)}>
			{showPassword ? <ViewIcon /> : <ViewOffIcon />}
		</Button>
	);
};
