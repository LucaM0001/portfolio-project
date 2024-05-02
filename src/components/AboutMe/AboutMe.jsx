import "./aboutMe.css";

import profile from "../../assets/profile.jpg";

import NavBar from "../NavBar/NavBar";

const AboutMe = () => {
  return (
    <>
      <NavBar />
      <div className="about-me">
        <div className="container row">
          <div className="col" id="profile">
            <img src={profile} alt="profile" />
          </div>
          <div className="col description">
            <h1 className="text-center text-warning text-uppercase">
              about me
            </h1>
            <p>
              Bonjour, je m'appelle Luca. Je développe des sites Web depuis plus
              de 4 ans. Je suis développeur Web full Stack. Les technologies que
              j'utilise sont MERN (MongoDB, Express, ReactJS et NodeJS). Je crée
              des sites Web réactifs qui s'affichent sur tous les appareils de
              bureau et smartphones. Je développe également des application
              mobile avec React Native. Bien sûr, avant de commencer à
              développer une application Web. Page de destination, site Web
              professionnel ou commerce électronique, j'ai besoin d'une mise en
              page de projet prête à l'emploi (croquis). Et je suis prêt à le
              faire pour vous, avant de commencer à développer votre site
              internet, nous discuterons avec vous de tous les détails de votre
              niche, je mènerai une enquête auprès de vos concurrents et
              dresserai une liste de leurs avantages et faiblesses. Tout cela
              est nécessaire pour offrir à vos clients quelque chose que vos
              concurrents ne proposent pas, ou pour le présenter aussi, mais en
              mieux ! Une fois le site Web terminé et prêt à déployer et à
              vendre un produit ou un service. Il est essentiel que vos clients
              potentiels vous connaissent. Je créerai pour vous une campagne
              publicitaire sur Google Adwords et Facebook.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
