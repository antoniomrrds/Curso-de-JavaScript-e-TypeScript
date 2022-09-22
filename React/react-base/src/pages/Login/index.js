import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clickButtonRequest());
  }

  return (
    <Container>
      <Title>
        login
        <small> oie</small>
      </Title>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
        dolorem quisquam accusamus magnam nulla inventore quas ex assumenda in
        atque cumque natus sequi laboriosam, rem iste, optio cupiditate, magni
        quae!
      </p>
      <button type="button" onClick={handleClick}>
        enviar
      </button>
    </Container>
  );
}
