import { useTheme } from "@/common/contexts/ThemeProvider";
import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
  from?: string;
  to?: string;
};

export default function GradientImageWrapper({ children, from, to }: Props) {
  const { gradient } = useTheme();
  const gradientStyle = {
    backgroundImage: `linear-gradient(to top right, ${from ? from : gradient.from} 0%, ${to ? to : gradient.to} 100%)`,
  };

  return (
    <div className={classNames("flex items-center justify-center rounded-lg p-1")} style={gradientStyle}>
      {children}
    </div>
  );
}
