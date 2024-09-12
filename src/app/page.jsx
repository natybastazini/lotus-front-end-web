import Image from "next/image";

import Logo from "./public/images/login/logo.svg";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex flex-row h-[20%] p-4">
        {/* CABEÇALHO */}
        <Image src={Logo} alt="logo" className="w-32 h-20"></Image>
        <h1 className="font-semibold">
          login
        </h1>
      </header>
      <main>

      </main>
    </div>
  );
}
