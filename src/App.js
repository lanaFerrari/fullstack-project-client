import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { CourseList } from "./Containers/Home/CourseList";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CourseList />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
