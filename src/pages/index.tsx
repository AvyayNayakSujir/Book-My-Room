import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import  Header  from "../components/Header";

import { api } from "~/utils/api";
import Navbar from "~/components/Navbar";
import Featured from "~/components/Featured";
import Properties from "~/components/Properties";
import FeaturedProperties from "~/components/FeaturedProperties";
import MailList from "~/components/MailList";
import Footer from "~/components/Footer";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from BookMyRoom" });

  return (
    <div>
    <Navbar/>
    <Header type="home"/>
    <div className="homeContainer mt-[50px] flex overflow-x-hidden flex-col items-center gap-[30px]">
    <Featured/>
    <h1 className="HomeTitle w-[1024px] text-[30px] text-center font-bold">Browse by property Type</h1>
    <Properties/>
    <h1 className="HomeTitle">Top Rated Properties</h1>
    <FeaturedProperties/>
    <MailList/>
    <Footer/>
    </div>
  </div>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
