import path from 'path/posix';
import {
  generateThumbImageFilename,
  getFullImagePath,
  getImageDirPath,
  getThumbImagePath
} from '../utils';

describe('Get images directory path', () => {
  it('gets full images direcrory path', (done) => {
    const path = getImageDirPath('full');
    expect(path).toContain('full');
    done();
  });

  it('gets thumbnail images direcrory path', (done) => {
    const path = getImageDirPath('thumb');
    expect(path).toContain('thumb');
    done();
  });
});

describe('Get image file path', () => {
  it('gets full image file path', (done) => {
    const path = getFullImagePath('mock', 'jpg');

    expect(path).toContain('mock.jpg');
    done();
  });

  it('gets thumbnail image file path', (done) => {
    const path = getThumbImagePath('mock', 'jpg');

    expect(path).toContain('mock.jpg');
    done();
  });
});

describe('Generate thumbnail image filename', () => {
  it('generates thumbnail image filename', (done) => {
    const filename = generateThumbImageFilename('mock', 100, 100);
    expect(filename).toContain('mock');
    expect(filename).toContain('100');
    done();
  });
});
