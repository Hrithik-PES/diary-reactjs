import "./styles.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import ChatCommunity from "./ChatCommunity";
export default function App() {
  return (
    <div className="App">
      {/* side bar */}
      <Sidebar />
      {/* calendar */}
      <Feed />

      {/* chat community */}
      <ChatCommunity />
    </div>
  );
}
