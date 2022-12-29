import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

const Pagination = ({ blogList, getBlogListPage, count }) => {
    const [active, setActive] = useState(1)
    const listingPerPage = 6
    const [currentPage, setCurrentPage] = useState(1)

    const visitPage = (page) => {
        window.scrollTo(0, 0)
        setCurrentPage(page)
        setActive(page)
        getBlogListPage(page)
    }

    const previousNumber = () => {
        window.scrollTo(0, 0)
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
            setActive(currentPage - 1)
            getBlogListPage(currentPage - 1)
        }
    }

    const nextNumber = () => {
        window.scrollTo(0, 0)
        if (currentPage !== Math.ceil(blogList.length / 3)) {
            setCurrentPage(currentPage + 1)
            setActive(currentPage + 1)
            getBlogListPage(currentPage + 1)
        }
    }

    let numbers = []
    const getNumbers = () => {
        let itemPerPages = listingPerPage, pageNumber = 1

        for (let i = 0; i < count; i += itemPerPages) {
            const page = pageNumber
            let content = null

            if (active === page) {
                content = (
                    <div key={i} className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                        {pageNumber}
                    </div>
                )
            } else {
                content = (
                    <div key={i} onClick={() => { visitPage(page) }} className={`hidden md:-mt-px md:flex`}>
                        <div className='className="cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"'>
                            {pageNumber}
                        </div>
                    </div>
                )
            }

            numbers.push(content)
            pageNumber++
        }

        return numbers
    }

    return (
        <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
            {/* Previous */}
            <div className="-mt-px w-0 flex-1 flex">
                <Button
                    onClick={() => { previousNumber() }}
                    className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                    <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Previous
                </Button>
            </div>
            {/* Numbers */}
            {getNumbers()}
            {/* Next */}
            <div className="-mt-px w-0 flex-1 flex justify-end">
                <Button
                    onClick={() => { nextNumber() }}
                    className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                    Next
                    <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Button>
            </div>
        </nav>
    )
}

export default Pagination