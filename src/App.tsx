import "./App.css";
import { ClassCard } from "./components/ClassCard";
import "material-icons/iconfont/material-icons.css";
import { getAllLessons } from "./data/api";

function App() {
  const lessons = getAllLessons();

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center m-4">
        <img src="/ibmtf.jpeg" alt="IBMTF" className="w-12 rounded-full mr-2" />
        <h1 className="text-center text-2xl text-white font-bold">
          Iglesia bautista misionera torre fuerte
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {lessons.map((lesson, index) => (
          <ClassCard key={index} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}

export default App;
