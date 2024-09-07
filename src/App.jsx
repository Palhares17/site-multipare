import { Header } from './components/sections/header';
import { Intro } from './components/sections/intro';
import { About } from './components/sections/about';
import { Products } from './components/sections/products';
import { Footer } from './components/sections/footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/home';
import EvaletPage from './components/pages/e-valet';
import EParePage from './components/pages/e-pare';

function App() {
  return (
    <BrowserRouter>
      <main className="p-6 lg:w-[1024px] mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="e-valet" element={<EvaletPage />} />
          <Route path="e-pare" element={<EParePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
