import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Form } from "./styles";
import { useAuth } from "../../hooks/auth";

import Input from "../../components/Input";
import Button from "../../components/Button/Button";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(event) {
    event.preventDefault(); 

    if (!password || !email ) {
      return alert("Preencha todos os campos");
    } 

    signIn({ email, password });
   
  }

  return (
    <div
      id="SignBox"
      className="h-[100vh] md:flex justify-center flex "
    >
      <Form
        id="Forms"
        className="px-[80px] lg:px-[136px] md:px-[70px]  flex flex-col  justify-center items-center text-center"
        onSubmit={handleSignIn}
      >
        <h1
          translate="no"
          className="text-[45px] text-[#ca6b12] font-bold"
        >
          SharkNotes
        </h1>

        <p className="text-[14px] text-[#aeaeae]">
          Aplicação para salvar e gerenciar seus links úteis.
        </p>

        <h2 className="text-[24px] mt-[64px] mb-[24px]">
          Faça seu login
        </h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="mt-[5px] w-[100%]">
          <Button title="Entrar" type="submit"></Button>{" "}
        </div>

        <Link
          to="/register"
          className="mt-[60px] text-[#e28228] hover:text-[#e28228]"
        >
          Criar conta
        </Link>
      </Form>

      <div
        id="backgroundImage"
        className="w-[100%] bg-no-repeat bg-[#1c1a22] bg-cover"
      >
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMXx8Y291cnNlc3xlbnwwfHx8fDE3MDYzMzEwMDZ8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=600"
          alt="Imagem de fundo"
          className="w-[] bg-no-repeat object-cover opacity-20 h-[100vh]"
        />
      </div>
    </div>
  );
}
