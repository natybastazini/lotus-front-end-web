import Image from "next/image";

import Logo from "./public/images/login/logo.svg";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex flex-row h-[20%] p-4 items-center">
        {/* CABEÇALHO */}
        <Image src={Logo} alt="logo" className="w-40 h-20"></Image>
        <div className="w-full h-52 flex items-center justify-center">
          <h1 className="font-semibold text-4xl text-escrita pt-6">
            Login
          </h1>
        </div>
      </header>
      <main className="grow flex">
        {/* FORMULÁRIO */}
        <form className="w-full flex flex-col items-center px-64">
          <div className="w-full h-full flex flex-col items-center">

            {/* E-MAIL */}

            <label class="text-principal text-xl font-semibold py-2" for="email">
              E-mail
            </label>
            <input
              type="email"
              className="bg-transparent border-2 border-input outline-none w-[50%] h-14 rounded-3xl px-4"
              placeholder="E-mail"
              required="">
            </input>

          </div>
          <div className="w-full h-full flex flex-col items-center  ">

            {/* PASSWORD */}

            <label class="text-principal text-xl font-semibold py-2" for="password">
              Senha
            </label>
            <input
              type="password"
              className="bg-transparent border-2 border-input outline-none w-[50%] h-14 rounded-3xl px-4"
              placeholder="Senha"
              required="">
            </input>

          </div>
        </form>


      </main>
    </div>
  );
}
