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
    <div className="h-[100vh] flex items-stretch">
      <Form
        id="Forms"
        className="px-[120px] flex flex-col justify-center items-center text-center"
        onSubmit={handleSignIn} 
      >
        <h1 className="text-[45px] text-[#ca6b12] font-bold">
          RocketNotes
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

        <Link to="/register" className="mt-[60px] text-[#ca6b12]">
          Criar conta
        </Link>
      </Form>

      <div className="w-[100%] bg-no-repeat bg-[#1c1a22] bg-cover">
        <img
          src="src/assets/background.png"
          alt="Imagem de fundo"
          className="w-[100%] bg-no-repeat object-cover opacity-20 h-[100vh]"
        />
      </div>
    </div>
  );
}
