import { useEffect, useContext, useRef } from "react";

import HomeLoader from "../../components/HomeLoader/Index";
import CurrentSection from "../../components/CurrentSection/Index";

import { PortfolioContext } from "../../context/PortfolioContext";

import { updateLoadingStatus } from "../../localStorage/localStorage";

import pic from "../../assets/images/patrick/patrickImg.jpeg";

import "./Home.css";

const Home = () => {
  const { isLoading, setIsLoading } = useContext(PortfolioContext);

  const homeSectionRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      updateLoadingStatus(false);
      setIsLoading(false);
      homeSectionRef.current.style.opacity = "1";
    }, 2400);
    if (!isLoading) homeSectionRef.current.style.opacity = "1";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="home-section">
      <CurrentSection />
      <section ref={homeSectionRef} className="home-section__container">
        <header>
          <h1>
            Patrick <span>Your favorite Front-end developer.</span>
          </h1>
        </header>
        <article>
          <img src={pic} alt="patrick picture" loading="eager" />
        </article>
      </section>
      {isLoading && <HomeLoader />}
    </main>
  );
};

export default Home;
