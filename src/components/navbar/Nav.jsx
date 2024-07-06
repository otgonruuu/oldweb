import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
const Nav = () => {
  const Bar = styled.div`
    width: 2rem;
    height: 2rem;
    top: 10px;
    right: 20px;
    z-index: 20;
    display: none;
    @media (max-width: 700px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
    }
    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ open }) => (open ? "#24c796" : "#07ad7b")};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear;
      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  `;

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  const linkstyle =
    "p-4 shadow-lg border border-transparent hover:shadow-2xl hover:bg-green-400 focus:outline-none font-medium text-gray-200 px-5 py-3 rounded-lg cursor-pointer";
  return (
    <>
      <div className="relative">
        <div className="absolute w-full top-0 z-50">
          <div
            className="flex justify-between items-center h-16 bg-gradient-to-r from-blue-400 via-green-400 to-green-500 shadow-sm font-mono "
            role="navigation"
          >
            <h3 className="px-4 text-2xlfont-light">
              <Link
                className="font-semibold  text-white text-md hover:text-2xl"
                to="/"
              >
                {" "}
                nogto{" "}
              </Link>
            </h3>
            <div
              className="sm:absolute sm:right-2 hamburger lg:invisible "
              onClick={toggle}
            >
              <Bar className="m-4" open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
              </Bar>
            </div>
            <div className="pr-8 md:block hidden ">
              <Link to="/" className={linkstyle}>
                нүүр
              </Link>
              <Link to="/project" className={linkstyle}>
                төсөл
              </Link>
              <Link to="/about" className={linkstyle}>
                тухай
              </Link>
            </div>
          </div>
          <div
            className={
              open
                ? " flex flex-col text-center items-center bg-gradient-to-r from-blue-400 via-green-400 to-green-500 opacity-3 shadow-sm text-white"
                : "hidden"
            }
            onClick={toggle}
          >
            <Link to="/" className="p-4 hover:text-green-300">
              нүүр
            </Link>
            <Link to="/project" className="p-4 hover:text-green-300">
              төсөл
            </Link>
            <Link to="/about" className="p-4 hover:text-green-300 ">
              тухай
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
