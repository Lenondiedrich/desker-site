import React, { useEffect, useState, useRef } from "react";
import { useScrollPosition } from "@/common/hooks/useScrollPosition";
import { ButtonType } from "@/common/components/buttons/NextButton";
import classNames from "classnames";
import { IconMenu2, IconX } from "@tabler/icons";
import { ANIMATE_MOBILE_MENU } from "@/common/animations/Animations";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import NextButton from "@/common/components/buttons/NextButton";
import Link from "next/link";
import { scrollIfNoHash } from "../utils/LinkScrollHelper";

export type NavigationMenuType = {
  links?: ButtonType[];
  buttons?: ButtonType[];
};

export default function NavigationMenu({ links, buttons }: NavigationMenuType) {
  const scrollPosition = useScrollPosition();
  const [scrollClass, setScrollClass] = useState("");
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const mobileNavClass = mobileNavVisible ? "bg-black" : "";

  useEffect(() => {
    if (scrollPosition.y > 100) {
      setScrollClass("border-neutral-600/40 bg-black/80");
    } else {
      setScrollClass("");
    }
  }, [scrollPosition]);

  return (
    <nav
      className={classNames(
        "nav fixed top-0 z-50 w-full border-b border-transparent backdrop-blur transition-all duration-500",
        scrollClass,
        mobileNavClass
      )}
    >
      <div>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 py-3 px-6 lg:gap-0">
          <div className="shrink-0">
            <Logo />
          </div>
          <ul className="hidden flex-wrap justify-center gap-2 text-xs font-medium text-neutral-400 lg:flex lg:gap-0 lg:text-sm">
            {links &&
              links.map((link, index) => (
                <li key={index} className="group relative">
                  {link.subItems ? (
                    <>
                      <span className="inline-link cursor-pointer px-3 py-3 lg:px-5">
                        {link.title}
                      </span>
                      <div className="absolute left-0 hidden pt-2 group-hover:block">
                        <div className="min-w-[200px] rounded-md border border-neutral-800 bg-black py-2">
                          {link.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              scroll={scrollIfNoHash(subItem.href)}
                              href={subItem.href}
                              className="block px-4 py-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      scroll={scrollIfNoHash(link.href)}
                      href={link.href}
                      className="inline-link px-3 py-3 lg:px-5"
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
          </ul>
          <ul className="hidden lg:flex">
            <li className="flex gap-4">
              {buttons &&
                buttons.map((button, index) => (
                  <NextButton {...button} key={index} size="small" />
                ))}
            </li>
          </ul>
          <div
            onClick={() => setMobileNavVisible(!mobileNavVisible)}
            className="block lg:hidden"
          >
            {mobileNavVisible ? <IconX></IconX> : <IconMenu2></IconMenu2>}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileNavVisible && (
          <motion.ul
            initial="hidden"
            whileInView="show"
            exit="exit"
            variants={ANIMATE_MOBILE_MENU}
            viewport={{ once: true }}
            className={classNames(
              "flex flex-col border-b-2 border-t-2 border-neutral-800/40 py-3 text-sm font-medium text-neutral-300 lg:hidden",
              scrollClass,
              mobileNavClass
            )}
            onClick={() => setMobileNavVisible(!mobileNavVisible)}
          >
            {links &&
              links.map((link, index) => (
                <React.Fragment key={index}>
                  {link.subItems ? (
                    <>
                      <div className="mx-3 border-b border-neutral-800 px-2 py-2 text-neutral-500">
                        {link.title}
                      </div>
                      {link.subItems.map((subItem, subIndex) => (
                        <Link
                          href={subItem.href}
                          key={`${index}-${subIndex}`}
                          className="inline-link mx-3 border-b border-neutral-800 px-4 py-2 last-of-type:border-b-0"
                          onClick={() => setMobileNavVisible(false)}
                        >
                          <li>{subItem.title}</li>
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="inline-link mx-3 border-b border-neutral-800 px-2 py-2 last-of-type:border-b-0"
                      onClick={() => setMobileNavVisible(false)}
                    >
                      <li>{link.title}</li>
                    </Link>
                  )}
                </React.Fragment>
              ))}
            <li className="flex gap-4 px-5 py-3">
              {buttons &&
                buttons.map((button, index) => (
                  <NextButton
                    key={index}
                    href={button.href}
                    title={button.title}
                    type={button.type}
                    size="small"
                  />
                ))}
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
