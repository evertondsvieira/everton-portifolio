import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('./pages/Home/Home.page'));
const Phrase = dynamic(() => import('./pages/Phrase/Phrase.page'));
const About = dynamic(() => import('./pages/About/About.page'));
const Skills = dynamic(() => import('./pages/Skills/Skills.page'));
const Contact = dynamic(() => import('./pages/Contact/Contact.page'));

export default function Home() {
  return (
    <div>
      <HomePage />
      <Phrase />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
