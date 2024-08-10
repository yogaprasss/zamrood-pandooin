import NextImage from 'next/image';
import ErrorImg from '@/assets/error-img.png';

import { useEffect, useState } from 'react';

import type { FC } from 'react';
import type { ImageProps } from 'next/image';

const Image: FC<ImageProps> = (props) => {
  const [imgError, setImgError] = useState(false);

  const onError = () => setImgError(true);

  useEffect(() => setImgError(false), [props.src]);

  return <NextImage {...props} src={imgError ? ErrorImg : props.src} onError={onError} />
};

export default Image;
