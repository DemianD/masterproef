import N3 from 'n3';
import { RDF, TREE } from '../utils/vocs.js';
import AbstractCollection from './AbstractCollection.js';

const { quad } = N3.DataFactory;

class HydraCollection extends AbstractCollection {
  constructor(observableProperty) {
    super();

    this.observableProperty = observableProperty;

    const collectionQuad = quad(this.getSubject(), RDF('type'), TREE('collection'));

    this.addQuad(collectionQuad);
    this.observableProperty.featureOfInterest.addQuad(collectionQuad);
  }
}

export default HydraCollection;
