import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, TitleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "./../Components/ScrollTop";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={TitleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={TitleAnim}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFBUlEQVR4nO2bW4hVVRjHf6fRmbEGFNNuUllGGkKXp5J66sEkSwqErKgJugqR3QwqulC91KMX6BTIEPVQJmRZpHnJDhOUIgxJYDaQmYrQdFErK2dOLPhvZjmdfdY62z3n7L3P+sF+mm/vWet/1rfXt77v2xAIBAKBQCAQCARaRiewFNgODAF/ALuB14DzWjesfHAx8A1QjbmOAYtbPcisMhs4KKH2A/cA5wPdwDXA+/rbMHBvqwebZfGqwLYYu6eCiP9nOvCThNkMbAG+qCP2E0HEk/lQgmwHTvdcsUFEcZ3E+w2YUUOofqASRIxngwR8KebvRrzgzjGcC5wAjgNnkpy2defHNfF1nvb9nu7cNnHiLk36Vk/7isOdoxDniHb2QjNXkx3S0S3tHf1pCs6Lmmg54f39Me68SM/9lILzlSZ6c8L7KzHufJWeu4MCc7Ze9n8DPSk/+zYJuJ4C06tJmiNbGvRrRXYAX+rZD1Ng3tEkza6ZBhVdq/XcA8AZFJgo63JFSs8rAav0zL+AaykwZrKDmuxN4yDefNqAJ1MKNUrACj3LHAcX0iZMBf4ERoA5CZ9RaseVZxNNfk1C8Va248qzMbWOf3TNbOC+UhBvlL4Gj3OldnfbscyUC5qc4GUO27DyYojeZWsdAnZY4Y9JRATEOSqWjwBXO1S5XwIaIScGBUd5XsLs1EqLY4JaPIztsiDgKF3AdxLmQYcwC2X3SztknRthkZWhnuaw3STb15s0ttzwiWdwPVsnGZNTvL5JY8tNZ9ZRz0TDY7LbB0xu0vhywVIJcxg4q47dacDnsn2riePLPCXgMwnzrsP2EoVAxnZJk8aXCy4Afpcwdzps77MaL69s0vhyVTc5qhpyPcqy/SG0AJ/MGxJmj2Oj6FRNpKr2YJNvTJseBe8bFPCbUOqZrMei3arvGmE+0PsxjinAgGy/TllE04J3KKZn+0jWe3EuBH7WYJ/16PbaK9vdKXX0z1fqrKpV3qt+7SWqPeeiK+wGDdJcd3iIOGDFiKZTIQ3xVit0GsvyvIj4iAZqMtgLHLZT1PZR1TcmLtFd4q1Swb7iaNPLvIivWCHLPIdtp87K0bvqbQmbRLySR2tdbkQsW0kHV3iDJhMF2z96nJ1riedLLkTssD64OeAp4izLpUf0I0w/BfHqdcrmQsQuK6U1pF3RhdkAHlUWx9z3q+K6iQlWXiHcuctaicc8NpaIS4GN1rtxUDWWpG7rI+LiLLtzWQM1vYa3N3DvjcC3Y4LiJOLVc+fl1nHUhFeZ352HFWz7ijBBLjaoOC/JynO581qN7VUyzjIJGB37Jje4ktNw21rMs87omWeBdezb47lDp0ktd+6x3tO56XbYab17XPnENKnlzrM0FvPD5oZu4E1rc3jPo9I3XtylMWwlh/Rame1Dp/BJRVJ33ma1ozxAjssDm6zV2NekJOhm638O5L0VpQQ8ZJVMh1T9q5WeSoNJloAHVa4tBBcBH1srY4fnMbARZujL+0i8pC3MmW8jGbSSC+tSmKj53vll6527Xx0UhaUbeM5Kdf2rndusUl9MzvEW/QDHrZW9PuvFprT7E1fqLB0J2VenY7ZHu3lZ79JINNNl+1HRP/JxBeBrVDKIXHujenQu12dpWyyho2uXMi+ZThY0uwq4QrWUWmXMYX2q+0ILjoq5Yqq+qPpeu6mpqdztaHgK1GC8sjSBQCAQCAQCgQAR/wGSELWpcrNemAAAAABJRU5ErkJggg=="/>
            <h2>01118877375</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACv0lEQVR4nO2UT2jTYByG48F5c4ieJ47RBE0rbZItcT2VHYQWWoebx11ksEPPehC92YA35wSvnpyDVoUetNrmYGvRKiK7bG6oW77uIqOCcyVx/eSbjWY1af70r/C98N7Kr++TPC1B4ODg4ODg6FLyeE7kKepugSTLeZLcyZNkseDxTBNdzk+JnlYluqjk6B0l5y2rOfoOzFDHrceT5GqBoqBBl0rDw4OdHg4zzKAi0Uuq5IX/NEevNIXYf/LG47WuFSmK6dR4JetlVMm7Zjj+b+fNAUhyywIAtQp4Lt7u8YDn4orkrVqMh0qOBuYAFFWzAQCBwEGZ5x59CQaPtTr86+joUSBwD9BNq/G/Abw102N2xmsAdYjPm+OjvNvxgGcCQOA+avfsAKC2DaBeBQjcFUgQh5yMLwvsLOC5qv5WrwAcKaVXBjS0ZYD5iZn3bgHsKNWoDHAB8Doz9sYUYEgEcHJuUc3RZ6tuAJopZaQMcADwI+vbvZUOVSKpGGwKgBq49g7eD8b2XAIcUKqZMsAmwPrzQPXy4zBE420BoJ66uQGvXrxeM/prtTOmDrGOavfzqsH49NNxeCEV/TPeNoDWybnFmnTGt+sGwGlV3fDvWZ8ipicODHcFoCmVYkNb3QLYfOHf1ivTMoCmVCIcX0FKdRLg5TP+U6MybQHQOjuz8AEIXKUDAJWFJ6HlZsPbAoBaFvwnAc++atd4WeDebvD+ETvj2wKAPltimMMyz4qywLWklMxz91bPjxxBN7sKoAWcY6KAZ7edP3X2mzzGXtLf6gkAilOlNGWIhvQMwIlSemX6CsBKKSNl+hLASCkzZfoWAAVpIgvsbVQzZfoawE0iGEDEb6ClRLBCCQD6/kecjMmmB4ZEWex3gHAqmjA9cPrG8sA+hMWb6AVAOBkDkWRMnHo4NdCp78fBwcHBIf67/ALECpwyy5gUBAAAAABJRU5ErkJggg=="/>
            <h2>HassanKhaled4432@gmail.com</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGl0lEQVR4nO2cW2xURRjH58xGuamJiQ/GSIy+m+ibUfD26oMx6IMxGo0xGK8PIsQXSww6U2jRoGCIaOINtfoCKHKJGEFADabztbSkcrO7pW4pFaEtve9nZjWESy/bc852Znb/v2QemrTn9HzzO998c9kVAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAsGhoyopYWRprqpDL7paIuqWhYamI0mn4MbOyKMTT7bUxtbIsxrjjq982RqmlZ8WEhC5c1Bv/FeKmNuagEMqrpEalMDuLQDGdZk81oelgEC3MUKVoulSlAHnIzRCtTiLTRooalCIoalpGmLyEOeVHb2b4ISqJI0Vuug4ZGF0ukzAoRUM2DYUt7JrEyhYwyi4T3sy1tss6DhcYTxKBD1ByYK3xFavMaOo98F3ip8JKGhozUdNKDAKHpyWJg8n4uNtY23YPOoyDkFdosEL4RabPadWDQqKQYRIpWCd+Qmn5BB1IYEiuzV/gG6h8KqJm88A2pzZD7wKDJ0jLQoPANdB4FJbDwDdcBQSMIBAkIGShNCa6qb+aXd57gXX/2cr5vhEfGCtzVP8I/Zft4ya5OvmZ1M6TTGMLGleDez49wZ+8wT4aV6r6NRyGRRg10mTxDowUuBft7d392BBJp1EDnh60TU2SeS2k/M8xz65ogkcYsjF/aeYLjsHhbDgJpCFQsmOOw9chZCKQhEJ/sH4klUMfZYQikIRAPj5VWPI9XTGMdibASbdd54vBX3wgE0hCIf4hZA+04hhpIQiDiF3d0xBLoue0dyEAaGSjWOlAW60CMhcQL3h67PVHqSvTgaIEXfHoY2UdjJfoiCe7feLRYGE+VeSAP4TzQRG+P3W23u+67c33nd+PtBuvO4738/PYOnleH3XgJgXAYTOJEIk4kysBeBOEbrgOCRhAIEhAyECSgIGIgfMN1QNAIAlkJkuD6+rd92Fb8EMDGltNsugaK61S9Q2PFv/1ncLT4s12SWN94ip/6Lsvz17YiA1W7QFfUNvEz3+f49/y5aV/PnlzZk+vjRze185UrZ/ZIrvCNahTojo8Pc2PX9MUZj7aeQX7g62MQqFoEenprrrgPlzYfmJ4ZWWEXvlFNGeiFmEdOSuW3zn6+7p2DEKgSBXrwm+Ocft65nF87+8uaiYRvVEMGuvG9Vu4+F+/IbRy+aj0NgSpJoLgfOUrC41uyyECVIpALTp0b5WvfTr8eEr5RDUOYK5bvyUMgCBSfnoHR1D/7L3wDGai8PLa5HQJV6hB2sHuAN/1xhj9p/rv4Gf2W7oHU77H58BkIVEkC2fPZaw50883rDo17n1veP8Sv786f30xNir3O7FXpDWPCN6ppCLNrQQtL/FKr+WtbixumaVDqPSGQxwL1DY/x7R+1Tauzrq5v5h/bk68h2U/tQqDAM9Cz2+J14g3vthTXdJKwwfRAoJAFskcukpzbWbwtl+j+aX6BhPCNtB4sCeW+/pPfJttWmFfXnCgL2dkdBApYoJvWJT+Cur7xVOz72+9OgkABCzQrhWOnT2zJxr7/2aExCBSqQKOFdL5C79YNbYnWnpCBAhXIHoBPo/OuX9MS+3+wB9kgUKACpdV5s1Y2Of8fbBO+kdaDJcGH68sAJIZACTo4CRCojLgOLgQiZCAINDkYwpCBGDUQhjAU0eUANRBhFgaBJsf1S1LANB6zMAmBMIQhA5UB1+m91CGm3NeXGMIgEARygOu3ExmIsBINgSYHszBkIMYsDEMYiuhygBqIMAuDQJPj+iUpYCUaszAJgTCEIQOVAdfpvdQhptzXlxjCIBAEcoDrtxMZiLASDYEmB7MwZCDGLAxDGIrocoAaiLyp80ppwjfSejA0mpEYCN9Ax1NQ8gvfcB0QNApdIDOETqQwRFZmUPiG1HTSeWDQuLQYmLzwDanMfnQghSLxz8I3Ik11HgQGTU8dg0iZWuEdtbQQHUhBCCx0853COxoaMlJRl+vgoNEUMTB5UcNS+IjUtBQdSH5LrMwrwltqjs+W2rQ7DxIaTyBPTtTvmyN8JqPMIqlMAZ1IfomsTCGjGh8SIRAps8J5wND4whhEit4QwVDDMlL0BTqRvBDZ9oW3hfOEMEdSNS3DcEZOh61IGx2ePJfWRNpkXb+F1ddMezA1T0mzM0Wv2jUI94Gt9GbyUpslNuai4rCp9M3GuyJtVkpl9v7/sNjF17FlGSrGUJm9NqY2tkEPVwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDVyb/zuG8R9g3ksQAAAABJRU5ErkJggg=="/>
            <h2>
              <a href="https://www.linkedin.com/in/hassan-khaled-6891531b6/">
                LinkedIn
              </a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
          <img src="data:image/png;base64,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"/>
            <h2>
              <a href="https://www.instagram.com/hassan.khaled.94">Instagram</a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2ZSWgVQRCGP2OCS3CJYoy7uCtiDi6o8aAIikvQi4oGvCiiRo2E6FXJQdxQg4LgUTx4cyPuHhVRD0bcsyDu4IJrTNTnSEMNPOfNm1czb2YSJD8UDNNT1fV3V1dX90AH/l8UAEuBfUAt8Bj4CLSKmOdH0ma+WQL0pp2gC1AGXAJ+A5ZPMToXgFViK3Z0AyqBVwGcTycvga1A17hILAAaQiTglHpgfpQEzNTXREjAKcdl5kNFf+BOjCQskVtAYVgkhst0W20kT8WHrNBP0qjVxtIAFAUl0bWNwsnyCLNAKfpoO3DecsjhICnWy+B2CbspwA7gWRbOmd1+G1As1cGBDN/P05LoptgnBruEoSH0A7gKVACzgNFAvsgYebcROAN8BTYDnR22ihWLXxVilYpRTLf75mlHy+PbAYr+zUB5oouy7Ah9o0pCkaL/F5lmpUwZ1+MiJFKi9GGll5FLSiPLIyRSrvThfDoDBT5K8eoIiRxT+vAL6OlmYKnSwGdZkFFhPPBT6Uupm4H9SmWT56PGSaUve92Ua5XK02Igskzpy1k35afKuMyNgchYJRFT0KbgvULRfBMHhiiJvHNTblUomm86xUBkoiMKPor8cfjT4qZsZ4rZUu+MAPoAA+XZljiIJCNXtoYC6dtUFYOSBjYFn6TxJnAXaJRQeiPPtqwgehz2iIrvScvAzFIKnkjjNUmxWyRPm4p1khw37VGJGjnS11BggmTKRVI575a7MPsIkIKL0rhLqsuDwCngOlAns/FBpnN1xLPRIqPdBDwAbgPngCNyFtrvVaZUKzOFkW8yU2FjncuC9pKdbkbm+jBgpBlYE1KomZJ8j08SRua4GeuuTMFOuSFryXnS0yBfBqMxQL8tXucie504xZxT1soGlM7wW+AEsEFGaiTQK8l2XznHmOvQKikvvgYgYImYkiotSj1SXomcwd8qw65KbihtFMq75iyct5JkYaa015RGsU7apwJfMpAwpNOhJAQy9eKLJyo8DJhcbpcQFyU07J84z4ErwOJMHQDrsyRSrr3duBckLn0gx6MPK4Pc9VOBzwQSLkYSIe4fGwKQSADT/XZ0JI2xT3KxNlgTpx4YFYBITZCO8qTu8tNRZ5/2/di+7PMC8B/09BnLfqG1+yCMP8DDgIdtSOS+nBhDQQ+pNOMmciWKf/F5UmInYiCSAA5FfdExWc4HURGpA2YQE3IlBTc4fvj7xeskfWNrU0zXTSnIkbLldFL54gelorswyz2pAx0gIvwFLXDNiM6zHVAAAAAASUVORK5CYII="/>
            <h2>
              <a href="https://github.com/HassanKha">GitHub</a>
            </h2>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 1rem 2rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 1.5rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #353535;
`;
const Social = styled(motion.div)`
img {
  border-radius : 2%;
  width: 5rem;
//  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}
@media only screen and (max-width: 600px) {
 
 
 h2 {
   font-size: 1.5rem !important;
  a{
    font-size: 1.6rem !important;
  }
 }
}
  display: flex;
  align-items: center;
  h2 {
    margin: 1.9rem;
    font-size: 3.8rem;
    font-weight: bold;
    :hover {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }
  }
  h2 a {
    text-decoration: none;
    color: #353535;
    font-size: 4rem;
    cursor: pointer;
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;
export default ContactUs;
