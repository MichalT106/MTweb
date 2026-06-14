import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';

export default function HomePage() {
  return (
    <>
      <SEO title="MTweb | Portfolio" path="/" />
      <Hero />
      <Experience />
      <Projects />
    </>
  );
}
