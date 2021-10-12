import * as path from 'path';
import { Request } from 'express';
import {
  ImageType,
  ImageAPIExtractedParams,
  ImageAPIRequestParams
} from './types';

export function getImageDirPath(type: ImageType) {
  return path.resolve('assets', `${type}`);
}

export function getFullImagePath(filename: string, extension: string) {
  return `${getImageDirPath('full')}/${filename}.${extension}`;
}

export function getThumbImagePath(filename: string, extension: string) {
  return `${getImageDirPath('thumb')}/${filename}.${extension}`;
}

export function generateThumbImageFilename(
  filename: string,
  width: number,
  height: number
) {
  return `${filename}-${width}x${height}`;
}

export function extractParameters(req: Request): ImageAPIExtractedParams {
  const { filename, extension, width, height } =
    req.query as ImageAPIRequestParams;

  return {
    filename,
    extension: extension || 'jpg',
    width: parseInt(width || '0'),
    height: parseInt(height || '0')
  };
}
