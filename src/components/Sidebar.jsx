import React, { useEffect, useState } from "react";
import { IconButton, Drawer } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CardSidebar } from "./CardSidebar";


export function Sidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => isMobile && setIsDrawerOpen(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 720;
      setIsMobile(isNowMobile);
      setIsDrawerOpen(!isNowMobile); // Abierto si es desktop, cerrado si es móvil
    };

    handleResize(); // ejecutar al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <IconButton variant="text" size="lg" className="fixed top-2 left-2 p-4" onClick={openDrawer}>
          {isDrawerOpen ? (
            <XMarkIcon className="h-8 w-8 stroke-2" />
          ) : (
            <Bars3Icon className="h-8 w-8 stroke-2" />
          )}
        </IconButton>
      )}
      {( isMobile ?(
        <Drawer open={isDrawerOpen} onClose={closeDrawer}  >
        <CardSidebar close={closeDrawer} ></CardSidebar>
      </Drawer>
      ) :(
        <CardSidebar></CardSidebar>
      )
      )}
      
    </>
  );
}
