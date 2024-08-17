import React from "react";

import { useState, useEffect } from "react";

import { api } from "../../services/api";

import ButtonText from "../../components/ButtonText/ButtonText";
import Section from "../../components/Section/Section";
import Tag from "../../components/Tag/Tag";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";

export default function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confim = window.confirm("Deseja excluir essa nota?");

    if (confim) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <>
      <div className="overflow-y-scroll scroll-">
        <Header />

        {data && (
          <main className="px-[20px] py-[50px]">
            <div className="max-w-[570px] my-0 mx-auto">
              <div className="flex content-end flex-wrap flex-row-reverse">
                <ButtonText
                  title="Excluir nota"
                  onClick={handleRemove}
                />
              </div>

              <h1 className="text-[36px] font-bold pt-[40px]">
                {data.title}
              </h1>

              <p className="text-[16px] mt-[16px] text-justify">
                {data.description}
              </p>

              {data.links && (
                <Section title="Links úteis">
                  <ul className="text-white">
                    {data.links.map((link) => (
                      <li className="mt-[12px]" key={String(link.id)}>
                        <a
                          className="hover:text-[#ca6b12] text-[#f3ae6d] transition-colors duration[03s]"
                          href={link.url}
                          target="_blank"
                        >
                          {link.url}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {data.tags && (
                <Section title="Marcadores">
                  {data.tags.map((tag) => (
                    <Tag key={String(tag.id)} title={tag.name}></Tag>
                  ))}
                </Section>
              )}

              <div className="mt-[40px]">
                <Button title="Voltar" onClick={handleBack} />
              </div>
            </div>
          </main>
        )}
      </div>
    </>
  );
}
