export type ImageType = 'thumb' | 'full';

export type ImageAPIRequestParams = {
  filename: string;
  extension?: string;
  width: string;
  height: string;
};

export type ImageAPIExtractedParams = {
  filename: string;
  extension: string;
  width: number;
  height: number;
};
