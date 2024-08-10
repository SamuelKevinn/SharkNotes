import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/undefined-avatar.svg";
import { api } from "../../../../../api/src/service/api";
import { RiShutDownLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import React from "react";



export default function Header() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [name] = useState(user.name);

  return (
    <>
      <div className="bg-[#1c1a22] items-center w-[100%] h-[105px] border-b-[2px] border-solid border-[#303030] flex justify-between  sm:px-[55px] px-[10px] mt-[-1px]">
        <Link to="/profile">
          <div className="flex items-center space-between">
            <div className="mr-[10px]">
              <img
                className="w-[56px] rounded-full"
                src={avatarUrl}
                alt="Foto do usuário"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-[14px] text-[#aeaeae]">
                Bem-vindo(a),
              </span>
              <strong className="text-[18px] text-[#ffffff]">
                {name}
              </strong>
            </div>
          </div>
        </Link>
        <div className="flex items-center">
          <button className="items-center mt-0 text-[30px] p-3 text-[#ca6b12] bg-[#0000] rounded-full hover:bg-[#ca6b12] hover:text-black">
            <RiShutDownLine onClick={handleSignOut} />
          </button>
        </div>
      </div>
    </>
  );
}
