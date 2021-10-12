import { resizeImage } from '../imageUtils';
import * as fsPromises from 'fs/promises';
import * as path from 'path';

describe('Image utilities images directory path', () => {
  it('gets full images direcrory path', async (done) => {
    const inputBuffer = await fsPromises.readFile(path.resolve('assets/full/fjord.jpg'));
    const outputBuffer = await resizeImage(inputBuffer, 100, 100);

    expect(outputBuffer).toBeDefined();
    done();
  });
});
