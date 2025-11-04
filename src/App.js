import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/semantics/Header'
import Fotter from './components/semantics/Fotter'
import Section from './components/semantics/Section'
import Nav from './components/semantics/Nav'
import Init from './view/Init'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Nav />
    <Section>
      <Routes>
        <Route path="/" element={<Init />} />
      </Routes>
    </Section>
    <Fotter />
    </BrowserRouter>
  );
}
