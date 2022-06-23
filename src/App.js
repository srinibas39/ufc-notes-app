import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { ArchivePage } from "./pages/ArchivePage";
import { FilteredNotesPage } from "./pages/FilteredNotesPage";
import { HomePage } from "./pages/HomePage";
import { LabelPage } from "./pages/LabelPage";
import { LoginPage } from "./pages/LoginPage";
import { NotesPage } from "./pages/NotesPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SignupPage } from "./pages/SignupPage";
import { TrashPage } from "./pages/TrashPage";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";


export const App = () => {
  const { token } = useSelector((state) => state.auth)
  return <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notes" element={<PrivateRoute token={token}><NotesPage /></PrivateRoute>} />
      <Route path="/archive" element={<PrivateRoute token={token}><ArchivePage /></PrivateRoute>} />
      <Route path="/trash" element={<PrivateRoute token={token}><TrashPage /></PrivateRoute>} />
      <Route path="/label" element={<PrivateRoute token={token}><LabelPage /></PrivateRoute>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/profile" element={<PrivateRoute token={token}><ProfilePage /></PrivateRoute>} />
      <Route path="/filter" element={<PrivateRoute token={token}><FilteredNotesPage /></PrivateRoute>} />

    </Routes>
  </>
}

export default App;
