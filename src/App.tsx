import { Suspense, useState } from "react"
import Banner from "./Component/Banner"
import Nav from "./Component/Nav"
import TechStack from "./Component/Stack/TechStack"
import './index.css'
import type IStack from "./type/stack"
import Footer from "./Component/Footer"

//promise toiri
const Stackfetch = async (): Promise<IStack[]> => {
  const res = await fetch("/data.json")
  const data = await res.json()
  return data
}

function App() {
  const [StackPromise] = useState(() => Stackfetch())


  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h1 className="max-w-6xl mx-auto flex justify-center items-center font-bold">loading.........</h1>}>
        <TechStack StackPromise={StackPromise}   />
      </Suspense>
      <Footer />  

    


    </>
  )
}

export default App
