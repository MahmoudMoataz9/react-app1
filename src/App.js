import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Layout } from "./Layout/Layout";
import { Contact } from "./Pages/Contact";
import { Services } from "./Pages/Services";
import { NoMatch } from "./Pages/NoMatch";
import { Welcome } from "./Layout/Welcome";
import { Old } from "./Pages/Services/Old";
import { New } from "./Pages/Services/New";
import { Admin } from "./Pages/Contact/Admin";
import { ContactDetails } from "./Pages/Contact/ContactDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Layout />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />}>
            <Route path="admin" element={<Admin />} />
            <Route path=":userId" element={<ContactDetails />} />
          </Route>
          <Route path="services" element={<Services />}>
            <Route index element={<Old />} />
            <Route path="old" element={<Old />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </>
    );
  }
}

export default App;
