import classNames from "classnames";
import Router from "next/router";
import React from "react";

export type ButtonType = {
  title: string;
  className?: string;
  tabIndex?: number;
  size?: "small" | "regular";
  href: string;
  type?: "primary" | "secondary";
  target?: string;
  subItems?: ButtonType[];
};

export default function NextButton({ title, className, tabIndex, size = "regular", href, type = "primary", target }: ButtonType) {
  const sizeClass = size === "small" ? "px-6 py-[10px] text-xs" : "px-8 py-3 text-xs sm:text-sm";

  const onClickHandler = () => {
    if (target) {
      window.open(href, target);
    } else {
      Router.push(href, href, { scroll: false });
    }
  };

  switch (type) {
    case "primary":
      return (
        <button
          onClick={onClickHandler}
          className={classNames(
            "button-text flex items-center justify-center whitespace-nowrap rounded-md bg-[#5046E5] transition-all duration-300 hover:bg-[#5046E5]/80",
            sizeClass,
            className
          )}
          tabIndex={tabIndex}
        >
          {title}
        </button>
      );

    case "secondary":
      return (
        <button
          onClick={onClickHandler}
          className={classNames(
            "flex items-center justify-center whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-900 text-center text-white backdrop-blur transition-all hover:bg-zinc-800",
            sizeClass,
            className
          )}
          tabIndex={tabIndex}
        >
          {title}
        </button>
      );
  }
}
