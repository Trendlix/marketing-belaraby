import { PortableText } from '@portabletext/react';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
// import ParagraphText from './typography/ParagraphText';
// import { Title } from './typography/Title';
// import sanityConfig from '../../sanity-config';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import { getSanityImageData } from '../utils/getSanityImageData';

interface IWrapper {
  children: React.ReactNode;
}
const myPortableTextComponents = {
  block: {
    normal: ({ children }: IWrapper) => <p className='text-gray-500'>{children}</p>,
    h1: ({ children }: IWrapper) => <p className='text-2xl text-gray-600'>{children}</p>,
  },
  // types: {
  //   customImage: ({ value }: any) => {
  //     const imageData = getImage(value.asset).asset;
  //     const { width, height } = getImageDimensions(value);

  //     const image = {
  //       url: imageData.url,
  //       width,
  //       height,
  //     };

  //     const gatsbyImageData = getSanityImageData({
  //       image,
  //       layout: 'constrained',
  //     });

  //     return (
  //       <GatsbyImage
  //         image={gatsbyImageData}
  //         alt={value.alt}
  //         className="bodyImage"
  //       />
  //     );
  //   },
  // },
};

function MyPortableText({ value }: any) {
  return <PortableText value={value} components={myPortableTextComponents} />;
}

export default MyPortableText;