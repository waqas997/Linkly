import React, { useState } from "react";
import logo from "../images/Logo.png";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  const openNav = () => {
    setMobile(!mobile);
  };

  return (
    <>
      {/* DESTOP MENU */}
      <div className={`main-container pt-5 hidden md:block z-50 relative`}>
        <div className="flex items-center justify-between">
          <div className="logo font-bold text-[30px] ">
            <img src={logo} alt="" />
          </div>
          <div className="flex items-center gap-12">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className=" flex items-center gap-2 text-[14px] land:text-[18px] inter500">
                  Features
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-black"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Account settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          License
                        </a>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block w-full px-4 py-2 text-left text-sm text-[14px] land:text-[18px]"
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <a className="text-[14px] land:text-[18px] inter500" href="">
              Pricing
            </a>
            <Link
              to="/support"
              className="text-[14px] land:text-[18px] inter500"
              href=""
            >
              Support
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[18px] inter500">Log in</div>
            <div className="bg-[#1361F5] px-5 py-2 rounded-full text-[14px] land:text-[18px] text-white inter500">
              <p>Try it Free</p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`relative pt-5 block md:hidden z-50 ${
          mobile
            ? "fixed bg-[#D8F3FF] w-full h-screen top-0 "
            : "main-container"
        }  `}
      >
        <div
          className={`logo flex justify-between items-center font-bold text-[30px] mb-6 ${
            mobile && "main-container"
          }`}
        >
          <img className="w-20" src={logo} alt="" />
          <div onClick={openNav} className="">
            {mobile ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            )}
          </div>
        </div>
        {mobile && (
          <div className=" ">
            <div className="flex flex-col items-center justify-center gap-12 mt-12">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className=" flex items-center gap-2 text-[18px] inter500">
                    Features
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-black"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <a className="text-[18px] inter500" href="">
                Pricing
              </a>
              <Link to="/support" className="text-[18px] inter500" href="">
                Supports
              </Link>
              <div className="flex items-center gap-3">
                <div className="text-[18px] inter500">Log in</div>
                <div className="bg-[#1361F5] px-5 py-2 rounded-full text-[18px] text-white inter500">
                  <p>Try it Free</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
