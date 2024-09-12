import Image from "next/image";

import Logo from "./public/images/cadastrar/logo.svg";

export default function Home() {
  return (
    <div className="h-screen flex">
      <div>
        <Image src={Logo} alt="logo" className="w-24"></Image>
        <h1 className="text-escrita">
          Cadastrar
        </h1>
      </div>
    </div>
  );
}
