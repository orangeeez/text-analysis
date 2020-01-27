import { SentencesPipe } from './sentences.pipe';

describe('SentencesPipe', () => {
  it('create an instance', () => {
    const pipe = new SentencesPipe();
    expect(pipe).toBeTruthy();
  });
});
