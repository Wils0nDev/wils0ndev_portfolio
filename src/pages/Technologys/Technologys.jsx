import { Typography } from "@material-tailwind/react";


import React from 'react'
import { TabsCustomAnimation } from "../../components/TabsTechnology";

export const Technologys = () => {
  return (
    <section id="technologys" className="flex flex-col justify-center xl:p-32 section-about md:p-10 sm:p-10 ">
			<Typography variant='h2' className="mb-4 text-indigo-800">
				Mis Skill
			</Typography>
            <TabsCustomAnimation />
    </section>
  )
}

