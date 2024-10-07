// import { useState } from "react"
import { GiftList } from "./components/GiftList/GiftList"
import { NavBar } from "./components/ui/NavBar/NavBar"


// interface IGIft {
//   urlGift: string;
//   title: string;
// }
function App() {

  // const[gift, setGift] = useState<IGIft[]>([]);
  return (
    <>
      <NavBar /> {/* Le pasamos la funcion para que lo setee en el NavBar */} {/* NavBar  setGift={setGift} */}
      <GiftList /> {/* GiftList {/*gift={gift}*/} 
    </>
  )
}

export default App
