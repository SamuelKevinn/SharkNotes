import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

export default function NoteItem({ isNew, value, onClick, ...rest }) {


  
  return (
    <Container $isNew={isNew} className="bg-[#151419] max-sm:w-full ">
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
        placeholder="Novo link"
        className="outline-none" 
      />

      <button 
        id="buttonAddRemove"
        type="button"
        onClick={onClick}
        {...rest}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
