import './App.css';
import { Helmet } from 'react-helmet';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MultiStep from './components/Multistep';
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Analytics } from '@vercel/analytics/react';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Products from './components/Products';
import About from './components/About';
import GBT from './components/GBT';
import Type1 from './components/Type1';
import Type2 from './components/Type2';
import Tesla from './components/Tesla';
import Adapters from './components/Adapters';
import EVScanner from './components/EVScanner';
import ProductPage from './components/ProductPage';
import Services from './components/Services';
import AC from './components/AChargers';
import Installation from './components/Installation';
import Emergency from './components/Emergency';
import PostPage from './components/PostPage';
import Blog from './components/Blog';
import PopularBlogs from './components/PopularBlogs';
import Links from './components/Links';
import NotFound from './components/404';
import ReactGA from 'react-ga';


function App() {
  
  ReactGA.initialize('G-HMP176XHH7');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <BrowserRouter>
      <Fragment>
        <Helmet>
          <title>شاحن ميجا - شواحن سيارات كهربائية</title>
          <meta
            name="description"
            content="شواحن ميجا هي شركة رائدة في مجال تزويد شواحن السيارات الكهربائية منتجاتها. نحن ملتزمون بتعزيز حلول النقل المستدامة ودعم الانتقال العالمي نحو السيارات الكهربائية."
          />
        </Helmet>
        <Analytics />

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Fragment>
                <Helmet>
                  <title>متجر - الشواحن الكهربائية</title>
                  <meta
                    name="description"
                    content="استكشف مجموعتنا من شواحن السيارات الكهربائية. توفر شواحن ميجا شاحن سريع وآمن لمختلف أنواع السيارات الكهربائية."
                  />
                </Helmet>
                <Products />
              </Fragment>
            }
          />
          <Route
            path="/products"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - جميع المنتجات</title>
                  <meta
                    name="description"
                    content="تصفح مجموعتنا من شواحن السيارات الكهربائية. توفر شواحن ميجا شاحن سريع وآمن لمختلف أنواع السيارات الكهربائية. بالإضافة إلى ذلك، نقدم أيضًا محولات وخدمات تركيب الشواحن المنزلية.                    " 
                  />
                </Helmet>
                <Products />
              </Fragment>
            }
          />
          <Route
            path="/products/chargers"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - الشواحن</title>
                  <meta
                    name="description"
                    content="اكتشف أفضل شاحن لسيارتك الكهربائية. يتوفر أنواع مختلفة لشواحن السيارات الكهربائية المختلفة مثل فولس فاجن ID4 و ID6 وتسلا وغيرها الكثير."
                  />
                </Helmet>
                <Products />
              </Fragment>
            }
          />
          <Route path="/pick" element={<MultiStep />} />
          <Route
            path="/gbt-chargers"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - GBT شواحن</title>
                  <meta
                    name="description"
                    content="شواحن بمنفذ GBT لسيارات فولكس فاجن ID4, ID6, شانجان وأي سيارة كهربائية أخرى تستخدم منفذ GBT."
                  />
                </Helmet>
                <Products />
              </Fragment>
            }
          />
          <Route
            path="/products/GBT"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - GBT شواحن بمنفذ</title>
                  <meta
                    name="description"
                    content="توفر شركة ميجا للشواحن شواحن بمنفذ GBT لسيارات فولكس فاجن ID4, ID6, شانجان وأي سيارة كهربائية أخرى تستخدم منفذ GBT."
                  />
                </Helmet>
                <GBT />
              </Fragment>
            }
          />
          <Route
            path="/products/type2"
            element={
              <Fragment>
                <Helmet>
                  <title>شواحن ميجا – شواحن بمنفذ Type 2</title>
                  <meta
                    name="description"
                    content="استكشف شواحن السيارات الكهربائية بمنفذ Type 2  والذي يتوافق مع السيارات الأوروبية الكهربائية مثل BMW, Audi, Porsche, Mercedes Benz بالإضافة للكثير من السيارات الأخرى مثل الدماني وبعض السيارات الآسيوية التي تأتي بمنفذ Type 2  مثل بعض سيارات الKia."
                  />
                </Helmet>
                <Type2 />
              </Fragment>
            }
          />
          <Route
            path="/products/type1"
            element={
              <Fragment>
                <Helmet>
                  <title>شواحن سيارات كهربائية بمنفذ Type 1 – MEV Charger</title>
                  <meta
                    name="description"
                    content="يتوفر شواحن للسيارات الكهربائية بمنفذ Type 1 مثل سيارات Ford, Chevrolet, GMC وغيرها من السيارات بمنفذ Type 1"
                  />
                </Helmet>
                <Type1 />
              </Fragment>
            }
          />
          <Route
            path="/products/tesla_charger"
            element={
              <Fragment>
                <Helmet>
                  <title>شواحن سيارات تسلا – شاحن ميجا</title>
                  <meta
                    name="description"
                    content="جد أفضل شاحن لسيارة تسلا الخاصة بك. تتوفر مجموعة واسعة من الشواحن المتنقل والثابتة لسيارات تسلا. ويتوفر أيضًا أدابتر تسلا كي تستطيع شحن التسلا بشواحن أكثر."
                  />
                </Helmet>
                <Tesla />
              </Fragment>
            }
          />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route
            path="/about"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - عنا</title>
                  <meta
                    name="description"
                    content="اعرف أكثر عن شواحن ميجا للسيارات الكهربائية. نوفر شواحن وأدابتر للسيارات الكهربائية المختلفة."
                  />
                </Helmet>
                <About />
              </Fragment>
            }
          />
          <Route
            path="/products/adapters"
            element={
              <Fragment>
                <Helmet>
                  <title>MEV Charger - المحولات</title>
                  <meta
                    name="description"
                    content=" اشتر محول لشاحن السيارة الكهربائية لديك كي تتمكن من شحن سيارتك بمختلف منافذ الشحن. يتوفر أنواع مختلفة من المحولات (ادابتر) لمختلف السيارات."
                  />
                </Helmet>
                <Adapters />
              </Fragment>
            }
          />
          <Route path="/products/ev-scanners" element={<EVScanner />} />
          <Route path="/products/adapters/dc" element={<Adapters />} />
          <Route path="/products/chargers/ac-chargers" element={<AC />} />
          <Route path="/services/ev-charger-installation" element={<Installation />} />
          <Route path="/services/roadside-charging-service" element={<Emergency />} />
          <Route path='/services' element={<Services />} />
          <Route path="/blog" element={              <Fragment>
            <Helmet>
                  <title>شواحن ميجا - مدونة الشواحن الكهربائية</title>
                  <meta
                    name="description"
                    content="اقرأ مقالاتنا عن السيارات الكهربائية والشواحن الكهربائية والمزيد."
                  />
                </Helmet>
<Blog />
</Fragment>

} />
          <Route path="/blog/:id" element={<PostPage />} />
          <Route path="/blog/the-best-places-to-buy-ev-chargers-in-dubai" element={<PopularBlogs />} />
          <Route path="/links" element={<Links />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingWhatsApp
        phoneNumber="971501679410"
        accountName="MEV Charger"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;