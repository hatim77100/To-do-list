// import ItemsContextProvider from "../contexts/itemsContextProvider";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        {/* <ItemsContextProvider> */}
        <Header />
        <ItemList />
        <Sidebar />
        {/* </ItemsContextProvider> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
