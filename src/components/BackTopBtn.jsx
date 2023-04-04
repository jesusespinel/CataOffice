import { useState, useEffect } from 'react';
import '../style-sheets/BackTopBtn.css'
import { BiChevronsUp } from "react-icons/bi";

const BackTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight) { // Check if user has scrolled down
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
    <BiChevronsUp
      id="back-to-top-btn"
      onClick={scrollToTop}
      title="Volver arriba"
      style={{ display: show ? 'block' : 'none' }}
    ></BiChevronsUp>
  );
};


export default BackTopBtn;
