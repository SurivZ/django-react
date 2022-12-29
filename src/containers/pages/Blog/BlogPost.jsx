import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getBlog } from "redux/actions/blog";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug;
  useEffect(() => {
    getBlog(slug);
  }, []);

  return <FullWidthLayout>BlogPost</FullWidthLayout>;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(BlogPost);
