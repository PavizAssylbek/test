const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  kz: 'kz'
}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}