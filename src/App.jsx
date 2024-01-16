import Api from "./Components/Api/Api"
import ListApi from "./Components/ListApi/ListApi"
import Main from "./Components/Main/Main"
import Main2 from "./Components/Main2/Main2"
import Navbar from "./Components/Navbar/Navbar"
import '../src/App.css'
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <div className="mx-auto max-w-[1440px]">
      <Navbar/>
      <Main/>
      <Main2/>
      <Api/>
      <ListApi/>
      <Footer/>
    </div>
  )
}

export default App
