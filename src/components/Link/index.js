import NextLink from 'next/link';

export default function Link({href, children, ...components}) {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  )
}