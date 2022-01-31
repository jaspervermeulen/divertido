import Container from '../components/container/container';
import Footer from '../components/footer/footer';
import Header from '../components/header';
import TopBar from '../components/topBar/topBar';

function Album() {
  return (
    <>
      <Container>
        <Header />
        <TopBar>Album</TopBar>
      </Container>
      <Footer />
    </>
  );
}

export default Album;
