import { React } from 'react';

import AboutSection from '../Components/AboutSection';
import ServicesSection from '../Components/ServicesSection';
import FAQSeaction from "../Components/FAQSection"
import {motion} from "framer-motion"
import { pageAnimation } from './../animation';
import ScrollTop from './../Components/ScrollTop';

const AboutUS = () => {

return (
      <div  >
    < AboutSection />
    <ServicesSection />
     <FAQSeaction />
     <ScrollTop/>
    </div>
    )


}

export default AboutUS;