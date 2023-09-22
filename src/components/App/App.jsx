// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './App.styled';
import Form from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  id = nanoid();


  handleAddContact = contactData => {
    this.setState({
      contacts: [...this.state.contacts, contactData],
    });
  };

  render() {
    return (
      <Container>
        <Form handleAddContact={this.handleAddContact} />
        <Contacts contacts={this.state.contacts} />
      </Container>
    );
  }
}
