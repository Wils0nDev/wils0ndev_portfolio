'use client';
import { Box } from '@mui/material';
import { Typography } from "@material-tailwind/react";

import { ProjectCard } from '../../components/ProjectCard';
import styles from './Projects.module.scss';


import abogados from "../../assets/img/projects/abogados.jpg";
import ecommerce from "../../assets/img/projects/ecommerce.jpg";
import erp from "../../assets/img/projects/erp.jpg";
import trueclock from "../../assets/img/projects/trueclock.jpg";
import task from "../../assets/img/projects/task.png";





export const Projects = () => {

	const styleSlider = {
		'&::before, &::after': {
			width: { xs: '15%', md: '20%' },
			background: 'linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%)'
		},
	};
	return (
		<section className="flex flex-col justify-center xl:p-32 section-about md:p-10 sm:p-10 ">
			<Typography variant='h2' className="mb-4 text-indigo-800">
				Mis Proyectos
			</Typography>
			<Box sx={styleSlider} className={styles.slider}>
				<div className={styles['slide-track']}>
					<div className={styles.slide}>
						<ProjectCard
							image={abogados}
							title={'Abogados Web'}
							description={'Aplicación web de consultoría de abogados  👨‍⚖️ '}
						/>
					</div>
					<div className={styles.slide}>
						<ProjectCard
							image={ecommerce}
							title={'Ecommerce Mueblería'}
							description={'Aplicación web para ventas de muebles. 🛋️  '}
						/>
					</div>
					<div className={styles.slide}>
						<ProjectCard
							image={erp}
							title={'StrongCages CRM'}
							description={'CRM para el control de ventas,compras, etc.  🛒'}
						/>
					</div>
					<div className={styles.slide}>
						<ProjectCard
							image={trueclock}
							title={'Trueclock - Antamina'}
							description={'Aplicación para gestionar el control de asistencias de los trabajadores. 🕗 '}
						/>
					</div>
					<div className={styles.slide}>
						<ProjectCard
							image={task}
							title={'Task App'}
							description={'Aplicación para gestionar tareas hechas y por hacer 🙂 '}
						/>
					</div>
				</div>
			</Box>
		</section>
	);
};
