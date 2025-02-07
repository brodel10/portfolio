"use client";

import type * as React from "react";
import Link from "next/link";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import classnames from "classnames";

const NavigationMenu = NavigationMenuPrimitive.Root;
const NavigationMenuList = NavigationMenuPrimitive.List;
const NavigationMenuItem = NavigationMenuPrimitive.Item;

interface NavItem {
  href: string;
  text: string;
}

interface NavigationMenuProps {
  items: NavItem[];
  className?: string;
}

export const CustomNavigationMenu: React.FC<NavigationMenuProps> = ({
  items,
  className = "",
}) => {
  const [section, setSection] = useState("about");
  const router = useRouter();

  useEffect(() => {
    if (window) {
      const hash = window && window.location.hash;
      setSection(hash);
      router.push(hash);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      items.forEach((item) => {
        const element = document.getElementById(item.href.replace("#", ""));
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop - 350 &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setSection(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="flex flex-col space-y-4">
        {items.map((item, index) => (
          <NavigationMenuItem key={index}>
            <Link
              href={item.href}
              className={classnames("text-text text-sm tracking-widest")}
              onClick={() => setSection(item.href)}
            >
              <div
                className={classnames(
                  item.href === section && "text-primary translate-x-3",
                  "transition-transform ease-in-out duration-300 hover:translate-x-10 hover:scale-110 hover:text-primary"
                )}
              >
                {item.text}
              </div>
              {/* {console.log(item.href === section)} */}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
