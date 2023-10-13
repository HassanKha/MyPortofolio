import { React } from 'react';
import home1 from "../img/home1.png"
import hassan from "../img/hassan.jpg"
import Hassan from "../img/hassan1.jpg"
import {motion} from "framer-motion"
import {About , Description , Image,Hide} from "../styles"
import { TitleAnim ,Fade,photoAnim} from './../animation';
import Wave from "./Wave"
import {Link} from "react-router-dom"

const AboutSection = () => {

const container = {
hidden : { x: 100 },
show : { x: 0 , transition: {duration : 0.75 , ease: "easeOut" , staggerChildren: 1 }}
}
    return (
        <About >
<Description >

<motion.div className="title">
<Hide>
<motion.h2 class="name"  variants={TitleAnim}  >Hassan Khaled Mohamed</motion.h2>

</Hide>
<Hide>
<motion.h2 class="dreams" variants={TitleAnim} >Frontend <span >Developer</span> - <span>Software</span> Enginner </motion.h2>
</Hide>
<Hide>
<motion.h2 class="true" variants={TitleAnim} >Computers and <span>Artificial</span> Intelligence <span>Cairo</span> University</motion.h2>

</Hide>
</motion.div>
<motion.p variants={Fade} >Software Engineer dedicated to Improving Skills through Hands-on Learning and Development work & in Web Development Environments </motion.p>
<Link to="/contact" ><motion.button variants={Fade} >Contact me</motion.button></Link>
</Description>
<Image>
    <motion.img variants={photoAnim} initial="hidden" animate="show" src={Hassan} alt="man with a camera"/>
</Image>
<Wave/>
        </About>
    )
}


//styles components



export default AboutSection;