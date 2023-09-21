import { render } from '@testing-library/react';
import React, { Component } from 'react';

import { Container } from './App.styled';
import Form from 'components/Form/Form';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => { 
    console.log(data);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler} />
      </Container>
    );
  }
}
