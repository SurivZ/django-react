import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from "containers/pages/Blog/Blog";
import BlogPost from "containers/pages/Blog/BlogPost";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
