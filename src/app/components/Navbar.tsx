"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
        <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
        </Link>
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 mx-4 text-sm">
                  <HoveredLink href="/me">Me</HoveredLink>
                  <HoveredLink href="/skills">Skills</HoveredLink>
                  <HoveredLink href="/projects">Projects</HoveredLink>
                  <HoveredLink href="/gallery">Gallery</HoveredLink>
                  <HoveredLink href="/resume">Resume</HoveredLink>
                </div>
            </MenuItem>
            <Link href={"/contactme"}>
                <MenuItem setActive={setActive} active={active} item="Contact Me">
                    
                </MenuItem>
            </Link>    
        </Menu>

    </div>
  )
}

export default Navbar