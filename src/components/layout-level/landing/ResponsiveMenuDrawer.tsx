"use client";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { X } from "lucide-react";
import Link from "next/link";
import { Drawer } from "vaul";

const ResponsiveMenuDrawer = () => {
  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Content className="bg-background flex flex-col  h-full max-xxs:w-full w-full xs:w-[400px] mt-24 fixed bottom-0 right-0 z-50 overflow-y-auto overflow-x-hidden">
        <div className="p-4 bg-background/80 flex-1 h-full">
          <div className="max-w-md mx-auto">
            <Drawer.Title className="font-medium mb-4 flex-grow flex justify-end">
              <Drawer.Close>
                  <X />
              </Drawer.Close>
            </Drawer.Title>
            <NavigationMenu className="flex flex-col items-start max-w-full flex-1">
              <NavigationMenuList className="py-4">
                <Link href="/benefit" legacyBehavior passHref>
                  <NavigationMenuLink className={'text-sm'}>Benefit</NavigationMenuLink>
                </Link>
              </NavigationMenuList>
              <NavigationMenuList className="py-4">
                <Link href="/works" legacyBehavior passHref>
                  <NavigationMenuLink className={'text-sm'}>How it Works</NavigationMenuLink>
                </Link>
              </NavigationMenuList>
              <NavigationMenuList className="py-4">
                <Link href="/faq" legacyBehavior passHref>
                  <NavigationMenuLink className={'text-sm'}>Faqs</NavigationMenuLink>
                </Link>
              </NavigationMenuList>
              <NavigationMenuList className="py-4">
                <Link href="/company" legacyBehavior passHref>
                  <NavigationMenuLink className={'text-sm'}>Company</NavigationMenuLink>
                </Link>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  );
};

export default ResponsiveMenuDrawer;
