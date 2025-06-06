// Page

import Page from './components/sections/Page';

//Header

import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Reviews from './components/sections/Reviews';
import Navigation from './components/sections/Navigation';

// Main
import Logos from './components/sections/Logos';
import Main from './components/sections/Main';
import Features from './components/sections/Features';
import FAQs from './components/sections/FAQs/FAQs';

function App() {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
        <Reviews />
      </Header>
      <Main>
        <Logos />
        <Features />
        <FAQs />
      </Main>
    </Page>
  );
}

export default App;
