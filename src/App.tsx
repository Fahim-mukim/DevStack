import { Suspense, useState } from "react"
import Banner from "./Component/Banner"
import Nav from "./Component/Nav"
import TechStack from "./Component/Stack/TechStack"
import './index.css'
import type IStack from "./type/stack"

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
      <Suspense fallback={<h2>loading.........</h2>}>
        <TechStack StackPromise={StackPromise}   />
      </Suspense>

    


    </>
  )
}

export default App
