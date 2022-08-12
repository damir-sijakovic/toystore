import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./comps/loading/loading";
import Test from "./comps/test/test";

const MainPage = lazy(() => import("./mainPage"));
const AboutPage = lazy(() => import("./aboutPage"));
const ProductPage = lazy(() => import("./productPage"));
const StorePage = lazy(() => import("./storePage"));
const PrivacyPage = lazy(() => import("./privacyPage"));
const SearchPage = lazy(() => import("./searchPage"));
const FourZeroFourPage = lazy(() => import("./fourZeroFourPage"));
const CookieConsent = lazy(() => import("./comps/cookieConsent/cookieConsent"));
const Hello = lazy(() => import("./comps/hello/hello"));

const App = () => {
  return (
    <>
      <CookieConsent />

      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="*" element={<FourZeroFourPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<MainPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Suspense>
      </Router>

      <Hello />
    </>
  );
};

export default App;

/*
UNUSED
<Test />

*/
