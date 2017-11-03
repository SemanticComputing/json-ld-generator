import React from 'react';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import UrlInput from '../components/UrlInput';
import ListInput from '../components/ListInput';
import Select from '../components/Select';
import JsonLdDisplay from '../components/JsonLdDisplay';
import { updateOrganization } from '../actions';
import { object, func } from 'prop-types';
import { Container, Row, Col, Form, FormGroup, Label } from 'reactstrap';

const ORG_TYPES = [
  {
    id: 'Organization',
    name: 'Organisaatio'
  },
  {
    id: 'EducationalOrganization',
    name: 'Opetusorganisaatio'
  }
];

let Organization = ({ updateOrganization, organization }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Organisaatio</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Label for='orgType'>Organisaation tyyppi</Label>
              <Select id='orgType' options={ORG_TYPES} onChange={(type) => updateOrganization({ '@type': type })} />
            </FormGroup>
            <FormGroup>
              <Label for='orgName'>Nimi</Label>
              <TextInput id='orgName' value={organization.name} placeholder='Nimi' onChange={(name) => updateOrganization({ name })} />
            </FormGroup>
            <FormGroup>
              <Label for='orgAltName'>Vaihtoehtoinen nimi</Label>
              <TextInput id='orgAltName' value={organization.alternateName} placeholder='Vaihtoehtoinen nimi' onChange={(alternateName) => updateOrganization({ alternateName })} />
            </FormGroup>
            <FormGroup>
              <Label for='orgUrl'>Verkko-osoite</Label>
              <UrlInput id='orgUrl' value={organization.url} placeholder='https://esimerkki.fi' onChange={(url) => updateOrganization({ url })} />
            </FormGroup>
            <FormGroup>
              <Label for='orgLogo'>Logo</Label>
              <UrlInput id='orgLogo' value={organization.logo} placeholder='https://esimerkki.fi/logo.png' onChange={(logo) => updateOrganization({ logo })} />
            </FormGroup>
            <FormGroup>
              <Label for='orgSameAs'>Sosiaalinen media</Label>
              <ListInput id='orgSameAs' values={organization.sameAs} placeholder='https://facebook.com/esimerkki' Input={UrlInput} onChange={(sameAs) => updateOrganization({ sameAs })} />
            </FormGroup>
          </Form>
        </Col>
        <Col>
          <JsonLdDisplay jsonld={organization} />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  organization: state.organization
});

const mapDispatchToProps = ({
  updateOrganization
});

Organization = connect(
  mapStateToProps,
  mapDispatchToProps
)(Organization);

Organization.propTypes = {
  organization: object,
  updateOrganization: func,
  addToOrganization: func
};

export default Organization;
