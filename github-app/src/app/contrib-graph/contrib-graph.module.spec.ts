import { ContribGraphModule } from './contrib-graph.module';

describe('ContribGraphModule', () => {
  let contribGraphModule: ContribGraphModule;

  beforeEach(() => {
    contribGraphModule = new ContribGraphModule();
  });

  it('should create an instance', () => {
    expect(contribGraphModule).toBeTruthy();
  });
});
