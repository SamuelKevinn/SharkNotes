import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ $isNew }) => ($isNew ? "transparent" : "")};
  color: gray;

  border: ${({ $isNew }) => ($isNew ? `2px dashed gray` : "none")};

  
  margin-bottom: 12px;
  border-radius: 10px;

  
 

  > button {
    border: none;
    background: none;

    
    color: red;

    display: flex;
    flex-direction: row-reverse;
    
  }

  .button-delete {
    color: red;
  }

  .button-add {
    color: orange;

  
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 10px;

    color: white;
    background: transparent;

    border: none;

    &::placeholder {
      color: gray;
      ;
    }
  }
`;
