"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import Logo from "./logo/logo"

const linkList = [
  {
    name: "白頭翁的特性",
    href: "/"
  },
  {
    name: "白頭翁的生態",
    href: "/ecology"
  },
  {
    name: "白頭翁的美照",
    href: "/gallery"
  },
  {
    name: "白頭翁的危機",
    href: "/crisis"
  }
]

const NavBar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const pathname = usePathname()

  const handleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen)
  }

  return (
    <nav className="relative z-10 min-h-[87px] w-screen bg-white shadow-[0_5px_5px_0px_rgba(0,0,0,0.25)] 2xl:h-screen 2xl:w-1/4">
      <div className="flex items-center justify-around py-5">
        <div
          className="hamburger flex h-[1.5rem] w-[1.5rem] flex-col justify-between 2xl:hidden"
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
        <h3 className="text-xl font-bold 2xl:mt-[3rem] 2xl:text-3xl">
          白頭翁不吃小米
        </h3>
        {/* logo here */}
        <Logo />
      </div>
      <ul
        className={clsx(
          "flex w-full flex-col items-center gap-3 bg-white transition-all duration-300 2xl:mt-20 2xl:max-h-fit 2xl:opacity-100",
          {
            "max-h-0 opacity-0": !isHamburgerOpen,
            "max-h-[200px] pb-[50px] opacity-100": isHamburgerOpen
          }
        )}
      >
        {linkList.map((link) => (
          <li
            key={link.name}
            className={clsx("text-lg font-bold hover:text-orange-400", {
              "text-[#AA6666] underline": pathname === link.href
            })}
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
