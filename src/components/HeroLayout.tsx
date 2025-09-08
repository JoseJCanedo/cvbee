'use client'
import { HeroUIProvider } from "@heroui/react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function HeroLayout(props){
    return(
        <HeroUIProvider>
            <NavBar />
            {props.children}
            <Footer />
        </HeroUIProvider>
    )
}