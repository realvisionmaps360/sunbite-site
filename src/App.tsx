import { Header }           from './components/Header'
import { Hero }             from './components/Hero'
import { ProductSection }   from './components/ProductSection'
import { IngredientsSection } from './components/IngredientsSection'
import { RomanaSection }    from './components/RomanaSection'
import { FindUsSection }    from './components/FindUsSection'
import { BookSection }      from './components/BookSection'
import { GallerySection }   from './components/GallerySection'
import { FAQSection }       from './components/FAQSection'
import { FinalCTASection }  from './components/FinalCTASection'
import { Footer }           from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />              {/* 1 — Crave it   */}
        <ProductSection />    {/* 2 — Want it    */}
        <IngredientsSection />{/* 3 — Trust it   */}
        <RomanaSection />     {/* 4 — Connect    */}
        <FindUsSection />     {/* 5 — Locate it  */}
        <BookSection />       {/* 6 — Reserve it */}
        <GallerySection />    {/* 7 — Share it   */}
        <FAQSection />        {/* 8 — Doubts out */}
        <FinalCTASection />   {/* 9 — Take action*/}
      </main>
      <Footer />              {/* 10 — Remember  */}
    </>
  )
}

export default App
