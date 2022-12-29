import { NavLink } from "react-router-dom"

const BlogCard = () => {
    return (
        <>
            <div key="{post.title}" className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="{post.imageUrl}" alt="thumbnail" />
                </div>
                <div className="flex-1 bg-white dark:bg-gray-900 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600 dark:text-blue-500">
                            <NavLink to="" className="hover:underline">
                                Category
                            </NavLink>
                        </p>
                        <NavLink to="" className="block mt-2">
                            <p className="text-xl font-semibold text-gray-900 dark:text-gray-50">Title</p>
                            <p className="mt-3 text-base text-gray-500">Description</p>
                        </NavLink>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <NavLink to="">
                                <span className="sr-only">Author</span>
                                <img className="h-10 w-10 rounded-full" src="{post.author.imageUrl}" alt="Author" />
                            </NavLink>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                                <NavLink to="" className="hover:underline">
                                    Author
                                </NavLink>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime="{post.datetime}">Date</time>
                                <span aria-hidden="true">&middot;</span>
                                <span>read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard