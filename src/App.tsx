import "./App.css";
import { ClassCard } from "./components/ClassCard";
import "material-icons/iconfont/material-icons.css";
import { getAllLessons } from "./data/api";

function App() {
  const lessons = getAllLessons();

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center m-4">
        <img
          src="https://scontent.fmex1-6.fna.fbcdn.net/v/t39.30808-6/309540346_467238358770539_5351012300385175077_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2UMw9_H2z7YAX_5GWMt&_nc_ht=scontent.fmex1-6.fna&oh=00_AfBHEShjKnIXQTQ27rrntjoVwbcnWIAzXMXciJu5NEHCzg&oe=6431FAB5"
          alt="IBMTF"
          className="w-12 rounded-full mr-2"
        />
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
