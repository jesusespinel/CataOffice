import { useState, useEffect } from 'react';
import '../style-sheets/BackTopBtn.css'
const BackTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      id="back-to-top-btn"
      onClick={scrollToTop}
      title="Volver arriba"
      style={{ display: show ? 'block' : 'none' }}
    >
      ↑
    </button>
  );
};

export default BackTopBtn;
