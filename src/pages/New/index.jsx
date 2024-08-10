import { useState } from "react"

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { api } from "../../../../../api/src/service/api"

import Header from "../../components/Header/Header";
import Input from "../../components/Input";
import NoteItem from "../../components/NoteItem";
import Textarea from "../../components/Textarea";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import ButtonText from "../../components/ButtonText/ButtonText";

export default function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag!== deleted))
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Preencha o título da nota.")
    }

    if (newLink) {
      return alert("Há um link escrita sem ser salva.");
    }

    if(newTag){
      return alert ("Há uma tag escrita sem ser salva.")
    }

    await api.post("/notes",
      {
        title,
        description,
        links,
        tags
      }
    )

    alert("Nota criada com sucesso!")
    navigate(-1)
  }

  return (
    <div id="ContainerNew">
      <Header />

      <main id="MainArea">
        <div id="Form" className="max-w-[550px] my-9 mx-5 sm:mx-auto">
          <header className="flex items-center justify-between mb-5 ">
            <h1 className="text-xl font-medium">Criar nota</h1>
            <Link to={-1} className="text-sm text-[#ca6b12]">
              <ButtonText>voltar</ButtonText>
            </Link>
          </header>

          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}

          />

          <Textarea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">

              {
                tags.map((tag, index) => (
                  <NoteItem  
                    key={String(index)}

                    value={tag} 
                    onClick={() => handleRemoveTag(tag)} />
                ))
              }

              <NoteItem 
                isNew 
                placeholder="Nova tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div className="mt-5">
            <Button title="Salvar" onClick={handleNewNote} />
          </div>
        </div>
      </main>
    </div>
  );
}
