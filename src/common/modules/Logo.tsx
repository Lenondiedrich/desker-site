import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/desker_full_logo.svg";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={logo} alt="Logo" priority height={60} />
    </Link>
  );
}
