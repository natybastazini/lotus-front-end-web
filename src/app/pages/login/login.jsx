import Image from "next/image";
import Logo from "./public/images/logo.svg";

import Link from "next/link"

export default function Login() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex flex-col md:flex-row h-[20%] p-4 items-center">
        {/* CABEÇALHO */}
        <Image src={Logo} alt="logo" className="w-40 h-20" />
        <div className="w-full flex flex-col items-center justify-center mt-4 md:mt-0">
          <h1 className="font-AbeeZee font-semibold text-3xl md:text-4xl text-escrita">
            Login
          </h1>
        </div>
      </header>
      <main className="flex grow flex-col items-center justify-center p-4 gap-2">
        {/* FORMULÁRIO */}
        <form className="w-full max-w-[40%] flex flex-col space-y-6">
          <div className="flex flex-col">
            {/* E-MAIL */}
            <label className="text-principal text-lg md:text-xl font-semibold mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="bg-transparent border-2 border-input outline-none w-full h-20 rounded-3xl px-4"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="flex flex-col">
            {/* PASSWORD */}
            <label className="text-principal text-lg md:text-xl font-semibold mb-2" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="bg-transparent border-2 border-input outline-none w-full h-20 rounded-3xl px-4"
              placeholder="Senha"
              required
            />
          </div>
          <div className="flex justify-center p-20">
            <button className="w-full max-w-72 h-14 bg-input border-2 border-principal text-principal font-bold rounded-2xl py-2">
              Entrar
            </button>
          </div>
        </form>
        <div className="flex flex-row gap-2">
          <p>
            Já tem uma conta?
          </p>
          <div className="text-white">
            <Link href="">
              Faça seu cadastro
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
