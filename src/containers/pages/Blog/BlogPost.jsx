import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getBlog } from "redux/actions/blog";
import { Link, useParams } from "react-router-dom";
import LoadingCard from "components/loaders/LoadingCard";

const BlogPost = ({ getBlog, post }) => {
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    getBlog(slug);
  }, []);

  return (
    <FullWidthLayout>
      {post ? (
        <div className="content relative py-16 bg-white dark:bg-black overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <svg
                className="absolute top-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-blue-600 dark:text-cyan-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-blue-600 dark:text-cyan-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <Link
                  to={`/blog/categories/${post.category.id}`}
                  className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"
                >
                  {post.category.name}
                </Link>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                  {post.title}
                </span>
              </h1>
              <img src={post.thumbnail} alt="thumbnail" className="dark:text-gray-50" />
              <p className="mt-8 text-xl text-black dark:text-gray-200 leading-8">
                {post.excerpt}
              </p>
            </div>
            <div className="mt-6 prose prose-indigo prose-lg text-black dark:text-gray-200 mx-auto">
              <p>{post.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <LoadingCard />
      )}
    </FullWidthLayout>
  );
};

const mapStateToProps = (state) => ({ post: state.blog.post });

export default connect(mapStateToProps, { getBlog })(BlogPost);
