import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from "containers/pages/Blog/Blog";
import BlogPost from "containers/pages/Blog/BlogPost";
import BlogCategory from "containers/pages/Blog/Category/BlogCategory";
import Search from "containers/pages/Search";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post/:slug" element={<BlogPost />} />
          <Route path="/blog/categories/:category_id" element={<BlogCategory />} />
          <Route path="/search/:term" element={<Search />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
