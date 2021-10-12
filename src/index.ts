import express, { Request, Response } from 'express';
import * as fsPromises from 'fs/promises';
import sharp from 'sharp';

import { queryValidatorMiddleware, imageCacheMiddleware } from './middleware';
import { ImageAPIExtractedParams } from './types';
import {
  getFullImagePath,
  getThumbImagePath,
  generateThumbImageFilename
} from './utils';

const port = process.env.PORT || 3000;
const app = express();

app.get('/api', (req: Request, res: Response) => {
  res.status(200).send('Hello to Image Processing API');
});

app.get(
  '/api/images',
  queryValidatorMiddleware,
  imageCacheMiddleware,
  async (req: Request, res: Response) => {
    try {
      console.log('Creating a new thumbnail!');

      const { filename, extension, width, height } =
        res.locals as ImageAPIExtractedParams;

      const image = await fsPromises.readFile(
        getFullImagePath(filename, extension)
      );

      await sharp(image)
        .resize({
          width,
          height
        })
        .toFile(
          getThumbImagePath(
            generateThumbImageFilename(filename, width, height),
            extension
          )
        );

      res.sendFile(
        getThumbImagePath(
          generateThumbImageFilename(filename, width, height),
          extension
        )
      );
    } catch (e) {
      console.log(e);
      res.status(404).send('File not found');
    }
  }
);

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});

export { app };
