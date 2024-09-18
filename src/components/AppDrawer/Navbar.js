import React, { useEffect, useState } from "react";
import ICONS from "../../assets/ICONS";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "./Navbar.css";
import { ProductArr } from "../../utils";
import IMAGES from "../../assets/IMAGES";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [pathName, setPathName] = useState(null);
  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);
  console.log("Asdaskjbdjhsadsad", location.pathname + location.search);

  return (
    <div>
      <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200  navbar-gradient">
        <span className="text-xs font-semibold ml-5 text-white">
          sales@betacode.com
        </span>
      </nav>
      <nav className="bg-white  fixed lg:w-full z-20 top-6 start-0 border-b border-gray-200 dark:bg-white-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <p className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={ICONS.BetaCodeLogo}
              alt="BetaCode Logo"
              className="w-[170px] h-[50px]"
              onClick={() => {
                navigate("/");
              }}
            />
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              Flowbite
            </span> */}
          </p>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              onClick={() => {
                navigate("/contact-us");
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:bg-transparent">
              <li>
                <p
                  className="relative group cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <span
                    className={`${
                      pathName == "/" ? " text-blue-700 " : " text-gray-900 "
                    } cursor-pointer block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 `}
                  >
                    Home
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full rounded-lg"></span>
                </p>
              </li>
              <li>
                <p
                  className="relative group cursor-pointer"
                  onClick={() => {
                    navigate("/about-us");
                  }}
                >
                  <span
                    className={`${
                      pathName == "/about-us"
                        ? " text-blue-700 "
                        : " text-gray-900 "
                    } cursor-pointer block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 `}
                  >
                    About Us
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full rounded-lg"></span>
                </p>
              </li>
              <li>
                <div class="dropdown">
                  <button class="dropbtn ">
                    <p className="relative group cursor-pointer">
                      <span
                        className={`${
                          pathName == "/product"
                            ? " text-blue-700 "
                            : " text-gray-900 "
                        } cursor-pointer block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex items-center`}
                      >
                        Products
                        <img
                          src={ICONS.down_arrow}
                          style={{
                            width: 15,
                            height: 15,
                          }}
                        />
                      </span>
                      <span className="absolute -bottom-1 left-0 w-0 h-[6px] bg-blue-400 transition-all group-hover:w-full rounded-lg"></span>
                    </p>
                  </button>
                  <div class="dropdown-content">
                    {ProductArr.map((val) => {
                      console.log(
                        "Asdahsbdhjsad",
                        val.PATH,
                        location.pathname + location.search == val.PATH
                      );

                      return (
                        <p
                          onClick={() => {
                            navigate(val.PATH, {
                              state: {
                                PRODUCT_DETAILS: val.DETAILS,
                              },
                            });
                          }}
                          style={{
                            color:
                              location.pathname + location.search == val.PATH &&
                              "#3250D6",
                          }}
                          className={`cursor-pointer block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                        >
                          {val.TITLE2}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </li>
              <li>
                <p
                  className="relative group cursor-pointer"
                  onClick={() => {
                    navigate("/contact-us");
                  }}
                >
                  <span
                    className={`${
                      pathName == "/contact-us"
                        ? " text-blue-700 "
                        : " text-gray-900 "
                    } cursor-pointer block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 `}
                  >
                    Contact
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full rounded-lg"></span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
