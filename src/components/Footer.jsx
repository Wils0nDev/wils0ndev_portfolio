import { Box, Typography } from '@mui/material';

export const Footer = () => {
	return (
		<Box
			marginY={{ xs: 1, md: 3 }}
			display='grid'
			sx={{ placeItems: 'center' }}
		>
			<Typography color='text.secondary'>
				 Wilson Vásquez - 2024
			</Typography>
		</Box>
	);
};
