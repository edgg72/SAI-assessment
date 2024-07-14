import './App.scss'
import Strings from './utils/strings.json'
import { NavBar } from './Components/NavBar/NavBar';
import { SolvingAILogo } from './assets/SolvingAILogo';
import { Hero } from './Components/Hero/Hero';
import { Features } from './Components/Features/Features';
import { CTAComponent } from './Components/CTAComponent/CTAComponent';
import { Footer } from './Components/Footer/Footer';

function App() {

  const { CTA, hero, features } = Strings;

  return (
    <>
      <NavBar
        links={Strings.links}
        Logo={SolvingAILogo}
        buttonText={Strings.buttonText}
      />
      <Hero 
        title={hero.title}
        paragraph={hero.paragraph}
        buttonText={hero.buttonText}
      />
      <Features
        title={features.title}
        subtitle={features.subtitle}
        paragraph={features.paragraph}
      />
      <CTAComponent
        title={CTA.title}
        paragraph={CTA.paragraph}
        pButtonText={CTA.learnMore}
        sButtonText={CTA.getStarted}
      />
      <Footer
        footerData={Strings.footerData}
        bottomText={Strings.rights}
      />
    </>
  )
}

export default App
