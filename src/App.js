import Layout from "./components/Layout";
import AuthContextProvider from "./contexts/AuthContext";
import PlaylistContextProvider from "./contexts/PlaylistContext";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <PlaylistContextProvider>
        <Layout />
      </PlaylistContextProvider>
    </AuthContextProvider>
  );
}

export default App;
