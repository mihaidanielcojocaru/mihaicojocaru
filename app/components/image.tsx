import NextImage, { type ImageProps } from 'next/image'

export default function Image(props: ImageProps) {
  return <NextImage {...props} unoptimized={props.unoptimized ?? true} />
}
