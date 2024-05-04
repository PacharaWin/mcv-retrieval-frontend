import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BasicTabs from "@/components/TabBar";
import { Box } from "@mui/material";
import ButtonAppBar from "@/components/AppBar";
import HomePage from "@/components/HomePage";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <HomePage 
      videoId={'b0tmxvX5YNg'}
      videoName={"1/2566 CEM II - 7 Aug 2023 - L01 Part I Signals"}
      uploader={"Punnarai Siricharoen"}
      transcript_id={"1"}
      filename={"class1"}
      
    />
)
}
