import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import BlogList from "components/blog/BlogList";
import Header from "components/blog/Header";
import BlogCategories from "components/blog/BlogCategories";

const Blog = () => {
  return (
    <FullWidthLayout>
      <Header />
      <BlogCategories />
      <BlogList />
    </FullWidthLayout>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Blog);
