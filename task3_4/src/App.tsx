import React from "react";
import { Header } from "./components/Header/Header";
import { Game } from "./components/Game/Game";
import { Chats } from "./components/Chats/Chats";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Game />
      <Chats />
    </>
  );
}

export default App;
