import EventEmitter from 'events';
import N3 from 'n3';
import { RDF, SOSA, XSD } from '../utils/vocs.js';
const { quad, literal, namedNode } = N3.DataFactory;

class ObservableProperty extends EventEmitter {
  subject;
  quads = [];

  constructor(featureOfInterest, subject, { quads = [] } = {}) {
    super();

    this.subject = subject;
    this.featureOfInterest = featureOfInterest;

    this.quads = [quad(subject, RDF('type'), SOSA('ObservableProperty')), ...quads];
  }

  getQuads() {
    return this.quads;
  }

  addObservation(date, literalResult) {
    const observationStore = new N3.Store();
    const observationSubject = namedNode(`${this.subject.value}/member/${date.toISOString()}`);

    observationStore.addQuad(observationSubject, RDF('type'), SOSA('Observation'));
    observationStore.addQuad(observationSubject, SOSA('observedProperty'), this.subject);
    observationStore.addQuad(observationSubject, SOSA('hasSimpleResult'), literalResult);

    observationStore.addQuad(
      observationSubject,
      SOSA('hasFeatureOfInterest'),
      this.featureOfInterest.subject
    );

    observationStore.addQuad(
      observationSubject,
      SOSA('resultTime'),
      literal(date.toISOString(), XSD('dateTime'))
    );

    super.emit('observation', observationStore);
  }

  emit() {
    throw new Error('Emit not supported. Use `addObservation`');
  }
}

export default ObservableProperty;