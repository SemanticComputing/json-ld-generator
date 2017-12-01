import { Container, Row, Col, Form, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import React from 'react';

import { object, func, string } from 'prop-types';

import { updateAnnotationType } from '../actions';
import Article from './Article';
import JsonLdDisplay from '../components/JsonLdDisplay';
import Organization from './Organization';
import Select from '../components/Select';

const TYPES = [
  {
    id: 'organization',
    name: 'Organisaatio'
  },
  {
    id: 'article',
    name: 'Artikkeli'
  }
];

let AnnotationSelector = ({ updateAnnotationType, current, currentType }) => {
  let container;
  switch (currentType) {
    case 'organization':
      container = <Organization />;
      break;
    case 'article':
      container = <Article />;
      break;
    default:
      container = <div />;
  }
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Label for='annotationType'>Valitse tyyppi</Label>
              <Select id='annotationType' options={TYPES} onChange={(annotationType) => updateAnnotationType(annotationType)} />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6 col-sm-12">
          {container}
        </Col>
        <Col className="col-md-6 col-sm-12">
          <JsonLdDisplay jsonld={current} />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentType: state.annotationType.currentType,
  current: state[state.annotationType.currentType]
});

const mapDispatchToProps = ({
  updateAnnotationType
});

AnnotationSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationSelector);

AnnotationSelector.propTypes = {
  updateAnnotationType: func,
  currentType: string,
  current: object
};

export default AnnotationSelector;
