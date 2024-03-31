'use client';
import React from 'react';
import { Box,Typography } from '@mui/material';

export const IconSkill = ({ text, icon }) => {
	return (
		<Box maxWidth='7rem' textAlign='center'>
			{icon}
			<Typography>{text}</Typography>
		</Box>
	);
};
