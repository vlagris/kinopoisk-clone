import React from "react";
import {Outlet, ScrollRestoration} from "react-router-dom";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {clsx} from "clsx";
import {isBrowser, isMobile} from "react-device-detect";


function Layout({children}:{children?: React.ReactNode}) {
  return (
    <div className={clsx(isBrowser && "viewContainer")}>
      <Header/>

      <div className={clsx("container", isMobile && "containerSmall")}>
        <main className="main">
          {children ?? <Outlet/>}
        </main>
      </div>

      <div className={clsx("container", isMobile && "containerSmall")}>
        <Footer/>
      </div>

      <ScrollRestoration/>
    </div>
  );
}

export default Layout;