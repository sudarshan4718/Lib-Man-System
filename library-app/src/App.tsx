import { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux";
import { RootState } from "./redux/ReduxStore.ts";
import HomePage from "./pages/HomePage/HomePage.tsx";


function App() {

  const [displayLogin, setDisplayLogin] = useState<boolean>(true);
 
  const loggedInUser = useSelector((state:RootState) => state.authentication.loggedInUser)
  

  useEffect(()=>{
    console.log(loggedInUser);
  }, [loggedInUser])

  return (
    <div>
      <HomePage />
    </div>
  )
}

export default App
