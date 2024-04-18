import { IconsSocialHover } from "../../components/IconsSocialHover";
import { CarouselCard } from "../../components/CarouselCard";
import { Typography } from "@material-tailwind/react";
import { Box } from '@mui/material';

import styleIcon from "../../components/scss/icons_social_hover.module.scss";
import "./About.css";
import { CarouselChild } from "../../components/CarouselChild";

const About = () => {
  return (
    <section id="about" className="flex flex-col justify-center border-b-2 border-gray-500 shadow-lg xl:p-32 section-about md:p-10 sm:p-10 shadow-indigo-500/30">
      <Typography variant='h4' color='primary' className="mb-1 text-orange-200" >
				Conoceme un poco más 🙂 
			</Typography>
			<Typography variant='h2' className="mb-4 text-indigo-800">
				Me presento
			</Typography>
      <div className={`${styleIcon.container} flex gap-0 justify-center md:flex-col md:w-full sm:flex-col xl:flex-row card-about-texto`}>
        <div className="gap-0 img-about xl:w-1/2 md:w-full">
          <CarouselChild />
        </div>
        <div className={` flex flex-col items-start gap-0 p-10 xl:w-1/2 md:w-full sm:w-screen  card-corousel `}>
          <div className="card-corousel">
          <CarouselCard />
          </div>
          <Box
						sx={{ display: { xs: 'none', md: 'block' } }}
						className={styleIcon.social + 'items-center ml-10'}
					>
          <IconsSocialHover style={styleIcon}/>
          </Box>
         
        </div>
      </div>
    </section>
  );
};

export default About;
