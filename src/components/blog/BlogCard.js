import { Link } from "react-router-dom"

const BlogCard = ({ post }) => {
    return (
        <>
            <Link to={`/blog/post/${post.slug}`} key={post.blog_uuid} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={post.thumbnail.url} alt="" />
                </div>
                <div className="flex-1 bg-white dark:bg-black p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                            <Link to={`/blog/categories/${post.category.id}`} className="hover:underline">
                                {post.category.name}
                            </Link>
                        </p>
                        <Link to={`/blog/post/${post.slug}`} className="block mt-2">
                            <p className="text-xl font-semibold text-gray-900 dark:text-gray-50">{post.title}</p>
                            <p className="mt-3 text-base text-gray-500">{post.description}</p>
                        </Link>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default BlogCard