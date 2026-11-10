import { Component, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import Lenis from "lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Products from "@/pages/Products";
import Industries from "@/pages/Industries";
import Amc from "@/pages/Amc";
import Contact from "@/pages/Contact";

function SmoothScroll({ children }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 120);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return children;
}

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-display font-extrabold text-navy text-3xl">Something went wrong</h1>
          <p className="mt-3 text-slate-500 text-sm">Please refresh the page. If the problem stays, call us on 074107 37766.</p>
          <Link to="/" className="mt-6 bg-navy text-white px-6 py-3 rounded-sm font-display font-bold">Go Home</Link>
        </div>
      );
    }
    return this.props.children;
  }
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6" data-testid="not-found">
      <h1 className="font-display font-extrabold text-navy text-6xl">404</h1>
      <p className="mt-3 text-slate-500">This page could not be found.</p>
      <Link to="/" data-testid="not-found-home" className="mt-6 bg-navy text-white px-6 py-3 rounded-sm font-display font-bold">
        Back to Home
      </Link>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/products" element={<Products />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/amc" element={<Amc />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <FloatingActions />
          </div>
        </SmoothScroll>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
