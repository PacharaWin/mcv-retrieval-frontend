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
    <HomePage />
)
}
