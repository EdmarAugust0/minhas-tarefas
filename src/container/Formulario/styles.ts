import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`
export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 8px;
  }

  label {
    margin-right: 8px;
  }
`

export const Opcao = styled.div`
  display: inline;
  /* O capitalize serve para deixar a primeira letra de todas as palavras em maiúsculo */
  text-transform: capitalize;
`
