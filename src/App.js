import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ArchivePage } from "./pages/ArchivePage";
import { HomePage } from "./pages/HomePage";
import { LabelPage } from "./pages/LabelPage";
import { NotesPage } from "./pages/NotesPage";
import { TrashPage } from "./pages/TrashPage";

export const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/trash" element={<TrashPage />} />
      <Route path="/label" element={<LabelPage/>}/>

    </Routes>
  </>
}

export default App;
