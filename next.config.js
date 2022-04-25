module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/faq/',
        permanent: true,
      },
    ]
  }
}