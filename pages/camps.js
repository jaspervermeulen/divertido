import Footer from '../components/footer/footer';
import Header from '../components/header';
import TopBar from '../components/topBar/topBar';

function Camps({camps}) {
  console.log(camps)
  
  return (
    <>
      <Header />
      <TopBar>Camps</TopBar>
      <Footer />
    </>
  );
}

export default Camps;

export async function getStaticProps() {
  const res = await fetch("https://iehp9qeu.api.sanity.io/v2021-10-21/data/query/divertido?query=[*[_type == \"Kamp\"]]");
  const camps = await res.json();

  return {
    props: {
      camps: camps.result[0]
    },
  }
}
