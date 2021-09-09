import "./App.css";
import Header from "./components/Header";
import LearnMoreSection from "./components/LearnMoreSection";
import CategorySection from "./components/CategorySection";
import imgLearnMore from "./assets/image-transform.jpg";
import imgStandOut from "./assets/image-stand-out.jpg";
import ClientTestimonials from "./components/ClientTestimonials";
import EmilyImage from "./assets/image-emily.jpg";
import JennieImage from "./assets/image-jennie.jpg";
import ThomasImage from "./assets/image-thomas.jpg";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <LearnMoreSection
        img={imgLearnMore}
        title="Transform your brand"
        description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
      />
      <LearnMoreSection
        img={imgStandOut}
        title="Stand out to the right audience"
        description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
        classe="learn-more-container-reverse"
      />
      <div className="category-container">
        <CategorySection
          title="Graphic Design"
          description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          classe="first"
        />
        <CategorySection
          title="Photography"
          description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          classe="second"
        />
      </div>
      <div className="clients-container">
        <h3>Client Testimonials</h3>
        <div className="clients-container-wrapper">
          <ClientTestimonials
            name="Emily R."
            description="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            role="Marketing Director"
            avatar={EmilyImage}
          />
          <ClientTestimonials
            name="Thomas S."
            description="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            role="Chief Operating Officer"
            avatar={ThomasImage}
          />
          <ClientTestimonials
            name="Jennie F."
            description="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            role="Business Owner"
            avatar={JennieImage}
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
