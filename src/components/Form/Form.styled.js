import styled from 'styled-components';

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 300px;

  button {
    padding: 4px;
    border-radius: 20px;
    background-color: #00ffff;
  }
  button:hover,
  button:focus {
    scale: 1.1;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.19) 0px 10px 20px;
  }
`;
