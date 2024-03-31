import { BackendSkills, Desingkills, FrontendSkills, ToolsSkills } from './Skills';
import {

    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
   
  export const TabsCustomAnimation = ()=> {
    const data = [
      {
        label: "FRONTEND",
        value: "html",
        desc: <FrontendSkills />,
      },
      {
        label: "DESING",
        value: "desing",
        desc: <Desingkills />,
      },
      {
        label: "BACKEND",
        value: "react",
        desc: <BackendSkills />,
      },
   
      {
        label: "TOOLS",
        value: "vue",
        desc: <ToolsSkills />,
      },

     
    ];
   
    return (
      <Tabs id="custom-animation" value="html">
        <TabsHeader  className="bg-">
          {data.map(({ label, value }) => (
            <Tab className="font-semibold text-orange-500 " key={value} value={value}
                
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }