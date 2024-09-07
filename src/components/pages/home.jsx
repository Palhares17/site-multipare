import { About } from '../sections/about';
import { Contact } from '../sections/contact';
import { Intro } from '../sections/intro';
import { Products } from '../sections/products';

function HomePage() {
  return (
    <section>
      <Intro />
      <About />
      <Products />
      <Contact />
    </section>
  );
}

export default HomePage;
