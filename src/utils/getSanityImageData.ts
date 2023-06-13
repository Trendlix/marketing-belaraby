import { getImageData } from 'gatsby-plugin-image';

function urlBuilder({ baseUrl, width, height, format, options }: any) {
  return `${baseUrl}?w=${width}&h=${height}&fmt=${format}&q=${options.quality}`;
}

export function getSanityImageData({ image, ...props }: any) {
  return getImageData({
    baseUrl: image.url,
    sourceWidth: image.width,
    sourceHeight: image.height,
    urlBuilder,
    
    pluginName: 'gatsby-source-example',
    formats: ['auto'],
    options: {
      quality: 50,
    },
    ...props,
  });
}