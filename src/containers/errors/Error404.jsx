import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <FullWidthLayout>
      <div class="error lg:px-24 lg:py-24 md:py-30 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 dark:bg-gray-800">
        <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div class="relative">
            <div class="absolute">
              <div class="">
                <h1 class="my-5 text-gray-800 font-bold text-2xl dark:text-blue-600">
                  Looks like you've found the doorway to the great nothing
                </h1>
                <p class="my-5 text-gray-800 dark:text-blue-600">
                  Sorry about that! Please visit our homepage to get where you
                  need to go.
                </p>
                <Link
                  to="/"
                  class="sm:w-full lg:w-auto mt-4 my-5 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                >
                  Go Home
                </Link>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="" />
        </div>
      </div>
    </FullWidthLayout>
  );
};

export default Error404;
