import Footer from "@/Partials/Footer";
import Header from "@/Partials/Header";
import NavbarVertical from "@/Partials/NavbarVertical";
import Scripts from "@/Partials/Scripts";
import TopNavbar from "@/Partials/TopNavbar";
import { useState } from "react";

const AuthenticatedLayout = ({ user, header, children}) => {
   const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

   return (
      <>
         <Header/>
         <main>
            <div id="app-layout" className="overflow-x-hidden flex">
               <NavbarVertical user={user} />
               <div id="app-layout-content" className="min-h-screen w-full min-w-[100vw] md:min-w-0 ml-[15.625rem] [transition:margin_0.25s_ease-out]">
                  <TopNavbar user={user} />
                  <div className="p-6">
                     {children}
                  </div>
                  <Footer/>
               </div>
            </div>
         </main>
         <Scripts/>
      </>
   )

}

export default AuthenticatedLayout
