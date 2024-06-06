"use client"

import { useState } from "react"
import clsx from "clsx"
import Logo from "./logo/logo"

const NavBar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  const handleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen)
  }

  return (
    <nav className="relative w-screen bg-white lg:h-screen lg:w-1/4">
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
        <h3 className="text-xl font-bold lg:text-3xl">白頭翁不吃小米</h3>
        {/* logo here */}
        <Logo />
      </div>
      <ul
        className={clsx(
          "flex w-full flex-col items-center gap-3 bg-white transition-all duration-300",
          {
            "max-h-0 opacity-0": !isHamburgerOpen,
            "max-h-[200px] opacity-100": isHamburgerOpen
          }
        )}
        style={{
          overflow: "hidden"
        }}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
