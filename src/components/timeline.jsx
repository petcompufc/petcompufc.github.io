import React from 'react'
import { Tabs, TabList, TabPanels,TabPanel, Tab, PseudoBox } from "@chakra-ui/core";

const Timeline = () =>{
   const CoolTab = React.forwardRef((props, ref)=>{
    return(
        <Tab ref={ref} isSelected={props.isSelected} {...props}>
            {props.isSelected ? " 🤯":"🤔 "}
            {props.children}
        </Tab>
    )
   });
    return(
    <PseudoBox>
      <Tabs variant="soft-rounded">
        <TabList>
             <CoolTab  _selected={{ color: "white", bg: "red.500" }}>1992</CoolTab>
             <CoolTab>2021</CoolTab>
             <CoolTab>3011++</CoolTab>
        </TabList>

     <TabPanels>   
        <TabPanel>
            <p>O PET Computação UFC foi fundado em Agosto de 1992 pelo Professor Riverson, 
                sendo o primeiro tutor (1992-1996), seguido do Professor Tarcísio (1996-1997), 
                o Professor Marcelino Pequeno (1997-2016) e depois pelo professor Lincoln Rocha (2016- atualmente).</p>
        </TabPanel>
        <TabPanel>
            <p>two!</p>
        </TabPanel>
        <TabPanel>
            <p>three!</p>
        </TabPanel>
     </TabPanels>
    </Tabs>
   </PseudoBox>
    );
}

export default Timeline;