import "aos/dist/aos.css";
import NavBar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Reviews from "./components/reviews/Reviews";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import Helmet from "react-helmet";

const App = () => {
  AOS.init();
  return (
    <>
      <Helmet
        title="FaxWeb"
        meta={[
          {
            'name': "description",
            'content':
              "FaxWeb - начинающий Front-End разработчик, делающий крутые сайты.",
          },
          {
            'name': "keywords",
            'content':
              "FaxWeb, faxweb, faxweb артем, Артем Павловский, Артем, Павловский, артем, артем павловский, Артем Павловский Разработчик, Front-End Developer, Back-End-Developer, React, Node.js, Next.js",
          },
          {
            'name': "Author",
            'content': "Артём Павловский"
          }
        ]}
      />
      <div className="bg">
        <div className="bg-circle-1"></div>
        <div className="bg-circle-2"></div>
        <div className="bg-circle-3"></div>
        <div className="bg-circle-4"></div>
      </div>
      <NavBar />
      <div className="wrapper">
        <Home />
        <Skills />
        <Portfolio />
        <Reviews />
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default App;
