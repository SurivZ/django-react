import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  getBlogListCategory,
  getBlogListCategoryPage,
} from "redux/actions/blog";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import BlogListPerCategory from "components/blog/BlogListPerCategory";

const BlogCategory = ({
  getBlogListCategory,
  blogList,
  count,
  getBlogListCategoryPage,
}) => {
  const params = useParams();
  const categoryId = params.category_id;

  useEffect(() => {
    getBlogListCategory(categoryId);
  }, []);

  return (
    <FullWidthLayout>
      <BlogListPerCategory
        blogList={blogList && blogList}
        getBlogListPage={getBlogListCategoryPage}
        count={count && count}
      />
    </FullWidthLayout>
  );
};

const mapStateToProps = (state) => ({
  blogList: state.blog.blog_list_category,
  count: state.blog.count,
});

export default connect(mapStateToProps, {
  getBlogListCategory,
  getBlogListCategoryPage,
})(BlogCategory);
