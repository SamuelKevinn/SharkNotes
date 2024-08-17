import { useState } from "react";

import { FiLock, FiMail, FiUser } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import Input from "../../components/Input";

import Button from "../../components/Button/Button";
import { Form } from "./styles";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(event) {
    event.preventDefault();

    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <div className="h-[100vh] flex items-stretch">
      <div className="w-[100%] bg-no-repeat bg-[#1c1a22] bg-cover">
        <img
          src="src/assets/background.png"
          alt="Imagem de fundo"
          className="w-[100%] bg-no-repeat object-cover opacity-20 h-[100vh]"
        />
      </div>

      <Form onSubmit={handleSignUp}>
        <h1 className="text-[45px] text-[#ca6b12] font-bold">
          RocketNotes
        </h1>

        <p className="text-[14px] text-[#aeaeae] w-[329px]">
          Aplicação para salvar e gerenciar seus links úteis.
        </p>

        <h2 className="text-[24px] my-[40px] mb-[40px]">
          Crie sua conta
        </h2>

        <Input
          autoComplete="off"
          id="name"
          name="name"
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          autoComplete="off"
          id="email"
          name="email"
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          autoComplete="off"
          id="password"
          name="password"
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="mt-[5px] w-[100%]">
          <Button
            title="Cadastrar"
            type="submit"
            onClick={handleSignUp}
          ></Button>
        </div>

        <Link to="/" className="mt-[50px] text-[#ca6b12]">
          Voltar para o login
        </Link>
      </Form>
    </div>
  );
}
