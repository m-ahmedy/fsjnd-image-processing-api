import { Request, Response, NextFunction } from 'express';
import * as fsPromises from 'fs/promises';

import { ImageAPIExtractedParams } from './types';
import { extractParameters } from './utils';
import {
  generateThumbImageFilename,
  getImageDirPath,
  getThumbImagePath
} from './utils';

export function queryValidatorMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { filename, extension, width, height } = extractParameters(req);

  if (!filename) {
    res.status(400).send('Please provide a valid filename');
  } else if (width === 0) {
    res.status(400).send('Please provide a positive number for width');
  } else if (height === 0) {
    res.status(400).send('Please provide a positive number for height');
  } else {
    res.locals = {
      filename,
      extension,
      width,
      height
    } as ImageAPIExtractedParams;

    next();
  }
}

export async function imageCacheMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { filename, extension, width, height } =
    res.locals as ImageAPIExtractedParams;

  try {
    const contents = await fsPromises.readdir(getImageDirPath('thumb'));
    const filenames = contents.map((f) => f.split('.')[0]);

    if (
      filenames.includes(generateThumbImageFilename(filename, width, height))
    ) {
      console.log('Serving from cache!');
      res.sendFile(
        getThumbImagePath(
          generateThumbImageFilename(filename, width, height),
          extension
        )
      );
    } else {
      next();
    }
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
}
