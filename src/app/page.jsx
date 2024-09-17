import Image from "next/image";
import Logo from "./public/images/login/logo.svg";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex flex-row h-[20%] p-4 items-center">
        {/* CABEÇALHO */}
        <Image src={Logo} alt="logo" className="w-40 h-20" />
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="font-semibold text-4xl text-escrita">Login</h1>
        </div>
      </header>
      <main className="flex grow items-center justify-center">
        {/* FORMULÁRIO */}
        <form className="w-full max-w-md flex flex-col space-y-6 px-4">
          <div className="flex flex-col">
            {/* E-MAIL */}
            <label className="text-principal text-xl font-semibold mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="bg-transparent border-2 border-input outline-none w-full h-14 rounded-3xl px-4"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="flex flex-col">
            {/* PASSWORD */}
            <label className="text-principal text-xl font-semibold mb-2" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="bg-transparent border-2 border-input outline-none w-full h-14 rounded-3xl px-4"
              placeholder="Senha"
              required
            />
          </div>
          <div className="flex justify-center">
            <a href="">
              <button className="w-40 bg-input border-2 border-principal text-principal text-bold rounded-2xl py-2">
                Entrar
              </button>
            </a>
          </div>
        </form>
      </main>
    </div>
  )
}
