import link from "next/link";
import Navbar from "./Navbar/Nvabar";
import Maincontent from "./Maincontent/Maincontent";
import { Component } from "react";
export default function Home(){
    return(
        <div className="bg-[#252B42] w-[1440px] h-[1132px] top-[-590px] left[-720px] ">
 <Navbar/>
 <Maincontent/>
     
</div>
    )
}
