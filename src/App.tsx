import Header from "./layout/Header";
import TopBar from "./layout/TopBar";
import ArrivalsCategory from "./section/ArrivalsCategory";
import ClientArea from "./section/ClientArea";
import CustomerCommitment from "./section/CustomerCommitment";
import ExploreCollections from "./section/ExploreCollections";
import Hero from "./section/Hero";


function App() {
  return (
    <div>
     <TopBar />
     <Header /> 
     <Hero />
     <ArrivalsCategory />
     <ExploreCollections />
     <CustomerCommitment />
     <ClientArea />
    </div>
  );
}

export default App;
