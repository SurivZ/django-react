import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { searchBlog } from "redux/actions/blog";
import SearchBlogList from "components/blog/SearchBlogList";

const Search = ({ searchBlog, posts }) => {
  const params = useParams();
  const term = params.term;

  useEffect(() => {
    searchBlog(term);
  }, []);

  return (
    <FullWidthLayout>
      <SearchBlogList blogList={posts} />
    </FullWidthLayout>
  );
};

const mapStateToProps = (state) => ({ posts: state.blog.filtered_posts });

export default connect(mapStateToProps, { searchBlog })(Search);
