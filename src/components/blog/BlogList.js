import { connect } from "react-redux"
import { useEffect } from "react"
import { getBlogList, getBlogListPage } from "redux/actions/blog"
import LoadingCard from "components/loaders/LoadingCard"
import BlogCard from "./BlogCard"
import Pagination from "components/pagination/Pagination"

const BlogList = ({ blogList, getBlogList, getBlogListPage, count }) => {
    useEffect(() => { getBlogList() }, [])

    return (
        <div>
            {/* <LoadingCard /> */}
            {blogList ? <>
                <div className="relative bg-gray-50 dark:bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="relative max-w-7xl mx-auto">
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                            {
                                blogList.map(post => (<BlogCard />))
                            }
                        </div>
                        <div className="text-center">
                            <Pagination blogList={blogList} getBlogListPage={getBlogListPage} count={count} />
                        </div>
                    </div>
                </div>
            </> : <LoadingCard />}
        </div>
    )
}

const mapStateToProps = state => ({ blogList: state.blog.blog_list, count: state.blog.count })

export default connect(mapStateToProps, { getBlogList, getBlogListPage })(BlogList)