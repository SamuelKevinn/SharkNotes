import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { RiAddLargeFill, RiSearchLine } from "react-icons/ri";

import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import ButtonText from "../../components/ButtonText/ButtonText";
import Input from "../../components/Input";
import Section from "../../components/Section/Section";
import Note from "../../components/Note";
import { api } from "../../services/api";

export default function Home() {
  const [search, setSearch] = useState("")
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    if (tagName === "all") {
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)
    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)

    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
    }

    fetchNotes()
   },[tagsSelected, search])

  return (
    <>
      <div id="Container" className="">
        <div
          id="Brand"
          className="flex bg-[#151419] justify-center items-center border-b-[2px] border-solid border-[#303030]"
        >
          <h1 className="text-[#ca6b12] text-[24px] font-medium">
            RocketNotes
          </h1>
        </div>
        <Header />

        <ul id="Menu" className="bg-[#151419] text-center">
          <li className="pt-[50px]">
            <ButtonText
              isActive={tagsSelected.length === 0}
              title="Todos"
              onClick={() => handleTagSelected("all")}
            />
          </li>
          {tags &&
            tags.map((tag) => (
              <li className="pt-[50px]" key={String(tag.id)}>
                <ButtonText
                  isActive={tagsSelected.includes(tag.name)}
                  title={tag.name}
                  onClick={() => handleTagSelected(tag.name)}
                />
              </li>
            ))}
        </ul>

        <div id="Search" className="pt-[50px] px-[50px] z-10 mb-10">
          <Input
            icon={RiSearchLine}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div
          id="Content"
          className="mx-[50px] mt-[-50px] overflow-y-auto"
        >
          <Section title="Minhas notas">
            {
              notes.map(note => (
                <Note
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))
            }
          </Section>
        </div>

        <Link to="/new">
          <button
            className="flex items-center justify-center font-bold h-full"
            id="NewNotes"
          >
            <span className="mr-[8px] text-[17px] p-[px]">
              <RiAddLargeFill />
            </span>
            Criar nota
          </button>
        </Link>
      </div>
    </>
  );
}
