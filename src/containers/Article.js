import { Form, FormGroup, FormFeedback, Label, InputGroup } from 'reactstrap';
import { connect } from 'react-redux';
import React from 'react';

import { object, func } from 'prop-types';

import { updateArticle, validateArticle } from '../actions';
import Select from '../components/Select';
import TextInput from '../components/TextInput';
import UrlInput from '../components/UrlInput';

const ARTICLE_TYPES = [
  {
    id: 'Article',
    name: 'Artikkeli'
  },
  {
    id: 'NewsArticle',
    name: 'Uutisartikkeli'
  },
  {
    id: 'BlogPosting',
    name: 'Blogiartikkeli'
  },
  {
    id: 'ScholarlyArticle',
    name: 'TutkimusArtikkeli'
  }
];

let Article = ({ updateArticle, validateArticle, article, validation }) => {
  const handleImgError = (prop, value) => {
    const validationVal = value ? false : undefined;
    return validateArticle({ [prop]: validationVal });
  };

  return (
    <div>
      <h2>Artikkeli</h2>
      <Form>
        <FormGroup>
          <Label for='articleType'>Artikkelin tyyppi</Label>
          <Select id='articleType' options={ARTICLE_TYPES} onChange={(type) => updateArticle({ '@type': type })} />
        </FormGroup>
        <FormGroup>
          <Label for='articleTitle'>Otsikko</Label>
          <TextInput id='articleTitle' value={article.headline} placeholder='Otsikko' onChange={(headline) => updateArticle({ headline })} />
        </FormGroup>
        <FormGroup>
          <Label for='articleDescription'>Kuvaus</Label>
          <TextInput id='articleDescription' value={article.description} placeholder='Kuvaus' onChange={(description) => updateArticle({ description })} />
        </FormGroup>
        <FormGroup>
          <Label for='articleUrl'>Verkko-osoite</Label>
          <UrlInput id='articleUrl' value={article.url}
            placeholder='https://esimerkki.fi/artikkeli.pdf' onChange={(url) => updateArticle({ url })} />
          <FormFeedback>Arvo ei kelpaa verkko-osoitteeksi</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for='articleImage'>Kuva</Label>
          <InputGroup>
            <TextInput id='articleImage' valid={validation.image} value={article.image}
              placeholder='https://esimerkki.fi/image.png' onChange={(image) => updateArticle({ image })} />
            <img className="img img-sm" src={article.image} onLoad={() => validateArticle({ image: true })}
              onError={() => handleImgError('image', article.image)} />
            <FormFeedback htmlFor='articleImage'>Osoitteesta ei löytynyt kuvaa</FormFeedback>
          </InputGroup>
        </FormGroup>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  article: state.article,
  validation: state.validation.article
});

const mapDispatchToProps = ({
  updateArticle,
  validateArticle
});

Article = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);

Article.propTypes = {
  article: object,
  validation: object,
  updateArticle: func,
  validateArticle: func,
  addToArticle: func
};

export default Article;
