"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export const MenuContext = createContext(null);

const MenuProvider = ({ children }) => {
  const [isMenu, setIsMenu] = useState(false);
  const pathName = usePathname();
  const router = useSearchParams();
  const handleMenuToggle = () => {
    setIsMenu(!isMenu);
  };
  useEffect(() => {
    setIsMenu(false);
  }, [pathName, router]);

  return (
    <MenuContext.Provider value={{ isMenu, setIsMenu, handleMenuToggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
