import type { Liff } from "@line/liff";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "@/components/base/Header";

const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
  liff,
  liffError,
}) => {
  return (
    <div className="w-full h-screen">
      <Header title="詳細" isBack={false} />
    </div>
  );
};

export default Home;
