import React from "react";
import Header from "./components/header";
import Secondary from "./components/secondary";
import Footer from "./components/footer";

class App extends React.Component{
  render(){
    return <>
      <Header></Header>
      <Secondary></Secondary>
      <Footer></Footer>
    </>
  }
}
export default App