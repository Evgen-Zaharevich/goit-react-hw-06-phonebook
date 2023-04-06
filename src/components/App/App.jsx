// import React, { Component } from 'react';
import { ContactForm } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';

import {
  Container,
  ContainerPhonebook,
  ContainerContacts,
  BGI,
  ContainerApp,
} from 'components/App/App.styled';
import { useState } from 'react';

export const App = () => {
  const contacts = useSelector(getContact);
  const [filter, setFilter] = useState('');

  const handleInputFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = filterName => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  };

  const showFilteredContacts = () => {
    return filter.length > 0 ? getFilteredContacts(filter) : contacts;
  };

  return (
    <ContainerApp>
      <BGI>
        <Container>
          <ContainerPhonebook>
            <Section title={'Phonebook'}>
              <ContactForm />
            </Section>
          </ContainerPhonebook>
          <ContainerContacts>
            <Section title={'Contacts'}>
              <Filter onInputFilter={handleInputFilter} />
              <Contacts showFilteredContacts={showFilteredContacts()} />
            </Section>
          </ContainerContacts>
        </Container>
      </BGI>
    </ContainerApp>
  );
};
