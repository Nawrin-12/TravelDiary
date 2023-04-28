import { Route,Routes } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Diaries from "./diaries/Diaries";
import Auth from "./auth/Auth";
import Add from "./diaries/Add";
import Place from "./place/Place";
import { useSelector } from "react-redux";
import DiaryUpdates from "./diaries/DiaryUpdate";

function App() {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  console.log(isLoggedIn);
  return <div><header>
    < Header/>
    </header>
    <section>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/diaries" element={<Diaries />} />
        <Route path="/auth" element={<Auth />}/>
        <Route path="/add" element={<Add />}/>
        <Route path="/place" element={<Place />}/>
        <Route path="/post/:id" element={<DiaryUpdates />}/>

      </Routes>
    </section>
    </div>;
}

export default App;
