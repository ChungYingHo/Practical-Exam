"use client"

import { useState } from "react"
import clsx from "clsx"
import Logo from "./logo/logo"

const linkList = [
  {
    name: "白頭翁的特性",
    href: "/"
  },
  {
    name: "白頭翁的生態",
    href: "/"
  },
  {
    name: "白頭翁的美照",
    href: "/"
  },
  {
    name: "白頭翁的危機",
    href: "/"
  }
]

const NavBar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  const handleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen)
  }

  return (
    <nav className="relative h-[87px] w-screen bg-white lg:h-screen lg:w-1/4">
      <div className="flex items-center justify-around py-5">
        <div
          className="hamburger flex h-[1.5rem] w-[1.5rem] flex-col justify-between lg:hidden"
          onClick={handleHamburger}
        >
          <div
            className={clsx(
              "h-1/6 w-full rounded-sm bg-black transition-transform",
              {
                "translate-y-[0.625rem] rotate-45 transform": isHamburgerOpen
              }
            )}
          ></div>
          <div
            className={clsx(
              "h-1/6 w-1/2 rounded-sm bg-black transition-opacity",
              {
                "opacity-0": isHamburgerOpen
              }
            )}
          ></div>
          <div
            className={clsx(
              "h-1/6 w-full rounded-sm bg-black transition-transform",
              {
                "-translate-y-[0.625rem] -rotate-45 transform": isHamburgerOpen
              }
            )}
          ></div>
        </div>
        <h3 className="text-xl font-bold lg:mt-[3rem] lg:text-3xl">
          白頭翁不吃小米
        </h3>
        {/* logo here */}
        <Logo />
      </div>
      <ul
        className={clsx(
          "flex w-full flex-col items-center gap-3 bg-white transition-all duration-300 lg:mt-20 lg:max-h-fit lg:opacity-100",
          {
            "max-h-0 opacity-0": !isHamburgerOpen,
            "max-h-[200px] pb-[50px] opacity-100": isHamburgerOpen
          }
        )}
      >
        {linkList.map((link) => (
          <li
            key={link.name}
            className="text-lg font-bold hover:text-[#AA6666] hover:underline"
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
