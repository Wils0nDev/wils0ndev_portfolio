import { GitHub, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
import { Box, Button, Stack, TextField,Link } from '@mui/material';
import { Typography } from "@material-tailwind/react";
import styles from './SocialIcon.module.scss';
import { useState } from 'react';
import Swal from 'sweetalert2';

export const Contact = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		if (form.name === '' || form.email === '' || form.message === '') {
			Swal.fire({
				title: 'Oops!',
				text: 'Debes llenar todos los campos',
				icon: 'error',
				confirmButtonText: 'Ok',
			});
			return;
		}

		// Validar con expresiones regulares
		const emailRegex =
			/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
		if (!emailRegex.test(form.email)) {
			Swal.fire({
				title: 'Oops!',
				text: 'El correo no es válido',
				icon: 'error',
				confirmButtonText: 'Ok',
			});
			return;
		}

		setForm({
			name: '',
			email: '',
			message: '',
		});

		Swal.fire({
			title: 'Gracias :D',
			text: 'Espera mi respuesta muy pronto!',
			icon: 'success',
			confirmButtonText: 'Cool!',
		});
	};

	return (
		<section id='contact' className="flex flex-col justify-center xl:p-32 section-about md:p-10 sm:p-10 ">
			<Typography variant='h2' className="mb-4 text-indigo-800">
				Contactame
			</Typography>
			
			<Stack spacing={2} alignItems='center'>
				<Typography >Mis redes sociales</Typography>
				<Box className={styles.container}>
					<Box className={styles.social}>
						<Link
							href='https://github.com/Wils0nDev'
							rel='noopener noreferrer'
							target='_blank'
							className={styles.github}
						>
							<GitHub className={styles.icon} />
						</Link>
						<Link
							href='https://www.instagram.com/ewilsonvasquezc/'
							rel='noopener noreferrer'
							target='_blank'
							className={styles.instagram}
						>
							<Instagram className={styles.icon} />
						</Link>
						<Link
							href='https://www.linkedin.com/in/edgar-wilson-vasquez-coronado/'
							rel='noopener noreferrer'
							target='_blank'
							className={styles.linkedin}
						>
							<LinkedIn className={styles.icon} />
						</Link>
						<Link
							href='https://web.whatsapp.com/send/?phone=51960235562&text&type=phone_number&app_absent=0'
							rel='noopener noreferrer'
							target='_blank'
							className={styles.whatsapp}
						>
							<WhatsApp className={styles.icon} />
						</Link>
					</Box>
				</Box>
				<Typography  mt={10}>
					O por correo
				</Typography>
				<Stack
					spacing={2}
					width='100%'
					maxWidth={{ xs: '100%', md: '50%' }}
					alignItems='center'
				>
					<TextField
						label='Nombre'
						fullWidth
						variant='outlined'
						value={form.name}
						onChange={handleChange}
						name='name'
					/>
					<TextField
						label='Correo'
						fullWidth
						variant='outlined'
						value={form.email}
						onChange={handleChange}
						name='email'
						inputMode='email'
					/>
					<TextField
						label='Mensaje'
						fullWidth
						variant='outlined'
						multiline
						rows={4}
						value={form.message}
						onChange={handleChange}
						name='message'
					/>
					<Button
						sx={{ width: '20rem' }}
						variant='contained'
						color='primary'
						onClick={handleSubmit}
					>
						Enviar
					</Button>
				</Stack>
			</Stack>
		</section>
	);
};
