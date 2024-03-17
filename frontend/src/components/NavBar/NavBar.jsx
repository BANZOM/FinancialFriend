import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className={`w-full bg-dark text-light`}>
      <nav className="container relative flex flex-wrap items-center justify-between p-6 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link to="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100 font-sans ml-2">
                    <span>FinancialFriend</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-neutral-400 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    <div>
                      <Link
                        to="/"
                        className="w-full px-4 py-2 -ml-4 text-neutral-400 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        Home
                      </Link>
                      <Link
                        to="/analyzer"
                        className="w-full px-4 py-2 -ml-4 text-neutral-400 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        Analyzer
                      </Link>
                      <Link
                        to="/community"
                        className="w-full px-4 py-2 -ml-4 text-neutral-400 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        Chat
                      </Link>
                    </div>

                    {!localStorage.getItem("authToken") ? (
                      <div className="d-flex">
                        <Link
                          to="/contact"
                          className="w-full px-4 py-2 -ml-4 text-neutral-400 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                        >
                          <ContactSupportIcon fontSize="medium" />
                        </Link>
                        <Link
                          to="/login"
                          className="w-full px-4 mt-auto text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                        >
                          Get Started
                        </Link>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <Link
                          to="/contact"
                          className="w-full px-4 py-2 -ml-4 text-neutral-400 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                        >
                          <ContactSupportIcon fontSize="medium" />
                        </Link>
                        <div
                          className="w-full px-4 mt-auto text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                          onClick={handleLogout}
                        >
                          Logout
                        </div>
                      </div>
                    )}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className="mr-3 nav__item">
              <Link
                to="/"
                className="w-full px-4 py-2 -ml-4 text-neutral-400 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
              >
                Home
              </Link>
              <Link
                to="/analyzer"
                className="w-full px-4 py-2 -ml-4 text-neutral-400 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
              >
                Analyzer
              </Link>
              <Link
                to="/community"
                className="w-full px-4 py-2 -ml-4 text-neutral-400 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
              >
                Chat
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Link
                to="/contact"
                className="w-full px-4 py-2 -ml-4 text-neutral-400 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
              >
                <ContactSupportIcon fontSize="medium" />
              </Link>
              <Link
                to="/login"
                className="w-full px-4 py-2 mt-auto text-center text-white bg-indigo-600 rounded-md lg:ml-5"
              >
                Get Started
              </Link>
            </div>
          ) : (
            <div className="d-flex">
              <Link
                to="/contact"
                className="w-full px-4 py-2 -ml-4 text-neutral-400 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
              >
                <ContactSupportIcon fontSize="medium" />
              </Link>
              <div
                className="w-full px-4 py-2 mt-auto text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;