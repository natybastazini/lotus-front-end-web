import Image from "next/image";
import Fundo from "./public/images/registrar/fundo.png";
import Logo from "./public/images/registrar/logo.svg";

export default function Home() {
  return (
    <div className="h-screen flex">
      <div className="w-[20%]">
        <Image src={Fundo} alt="fundo" className="h-screen w-full"></Image>
      </div>
      <div>
        <Image src={Logo} alt="logo" className="w-24"></Image>
      </div>
    </div>
  );
}
