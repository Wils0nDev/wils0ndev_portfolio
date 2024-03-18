
import styles from './scss/ProjectCard.module.scss';
import { Box,  Typography, Link } from '@mui/material';



import React from 'react'

export const ProjectCard = ({
	image,
	title,
	description,
}) => {


  const cardStyle = {
		width: { xs: '250px', md: '400px' },
		height: { xs: '250px',  },
		'&:before': {
			height: { xs: '100%', md: 0 },
		},
	};

	const contentStyle = {
		p: { xs: 2, md: 0 },
		height: { xs: '100px', md: 0 },
	};
  

	return (
		<Box sx={cardStyle} className={styles.card}>
			<img
				src={image}
				alt='project'
				style={{ width: '100%', height: '100%' }}
			/>
			<Box sx={contentStyle} className={styles.content}>
				<Typography variant='body2'>{title}</Typography>
				<Typography>{description}</Typography>
			</Box>
		</Box>
	);
}

