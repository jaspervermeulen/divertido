import Header from '../components/header';
import Footer from '../components/footer/footer';

import HeroSection from '../container/heroSection/heroSection';
import CompanyVision from '../container/companyVision/companyVision';
import DiscoverCamps from '../container/discoverCamps/discoverCamps';

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <DiscoverCamps backgroundColor="bg-blue" textColor="text-white" />
      <CompanyVision />
      <Footer />
    </>
  );
}

export default Home;
