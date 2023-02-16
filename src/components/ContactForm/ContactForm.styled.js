import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 550px;
`;

export const InputName = styled.input`
  margin-top: 50px;
  padding: 30px 0px 30px 45px;

  color: #2d2d2d;

  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
`;

export const InputEmail = styled.input`
  padding: 30px 0px 30px 45px;

  color: #2d2d2d;

  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
`;

export const InputMessage = styled.input`
  padding: 30px 0px 125px 45px;

  color: #2d2d2d;

  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 30px 50px;

  width: 220px;

  font-size: 18px;

  color: #ffffff;
  background: #fad34f;

  border: 0px;
  border-radius: 500px;
`;
