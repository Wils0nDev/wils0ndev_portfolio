import styles from './scss/customButtom.module.scss';

export const CustomButton = () => {
	return (
		<div>
			<a href='#projects' className={`flex flex-row items-center` + ' ' + styles.cta}>
				<span>Mis proyectos</span>
				<svg width='13px' height='10px' viewBox='0 0 13 10' >
					<path d='M1,5 L11,5'></path>
					<polyline points='8 1 12 5 8 9'></polyline>
				</svg>
			</a>
		</div>
	);
};
