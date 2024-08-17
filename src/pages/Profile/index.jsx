
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import Input from "../../components/Input";
import Button from "../../components/Button/Button";

import avatarPlaceholder from "../../assets/undefined-avatar.svg"
import { api } from "../../services/api";

import { Link } from "react-router-dom";

import {
  FiArrowLeft,
  FiCamera,
  FiLock,
  FiMail,
  FiUser,
} from "react-icons/fi";

export default function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(user.avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    const userUpdated = Object.assign(user, updated)
    
    await updateProfile({ user: userUpdated, avatarFile });
    alert("Dados atualizados com sucesso")
  }

  async function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <div>
      <header className="w-[100%] h-[120px] bg-[#17161c] flex items-center lg:px-10 ">
        <Link to="/" className="ml-10 ">
          <FiArrowLeft className="text-[24px] text-[#aeaeae]" />
        </Link>
      </header>
      <div className="max-w-[100%] flex justify-center">
        <div id="forms" className="mt-[px] w-[340px]">
          <div id="avatar" className="mb-[25px] mt-[-90px]">
            <div className="flex justify-center">
              <img
                src={avatarUrl}
                alt="Foto do Usuário"
                className="rounded-full w-[186px] h-[186px] relative"
              />
              <label
                htmlFor="avatarInput"
                className="w-[48px] h-[48px] bg-[#ca6b12] rounded-full flex items-center justify-center absolute mt-[135px] ml-[130px] cursor-pointer"
              >
                <FiCamera className="" />
                <input
                  id="avatarInput"
                  type="file"
                  className="hidden"
                  onChange={handleChangeAvatar}
                />
              </label>
            </div>
          </div>
          <div className="mb-[25px]">
            <Input
              id="1"
              placeholder="Nome"
              type="text"
              icon={FiUser}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              id="2"
              placeholder="E-Mail"
              type="text"
              icon={FiMail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Input
            id="3"
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
            onChange={(e) => setPasswordOld(e.target.value)}
          />
          <Input
            id="4"
            placeholder="Nova Senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPasswordNew(e.target.value)}
          />
          <div className="mt-5">
            <Button title="Salvar" onClick={handleUpdate}/>
          </div>
        </div>
      </div>
    </div>
  );
}
