import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import RefsPage from "./pages/RefsPage";
import ListPage from "./pages/ListPage";
import ParamsPage from "./pages/ParamsPage";
import RefsClassPage from "./pages/RefsClassPage";

function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/listpage">List</Link>|<Link to="/refspage">Refs</Link>|
        <Link
          to={{
            pathname: "/paramspage/12",
            state: {
              test: [1, 2, 2, 3],
            },
          }}
        >
          Params
        </Link>
        |{/* <a href="/listpage">List</a> */}
        {/* <a href="/refspage">Refs</a> */}
      </nav>
      <Switch>
        <Route path="/refspage" component={RefsPage} />
        <Route path="/listpage" component={ListPage} />
        <Route path="/paramspage/:id" component={ParamsPage} />
      </Switch>
    </div>
  );
}

export default App;
