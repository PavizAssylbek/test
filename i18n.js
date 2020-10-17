const NextI18Next = require('next-i18next').default
const path = require('path')



module.exports = new NextI18Next({
  defaultLanguage: 'ru',
  otherLanguages: ['kz'],
  localeSubpaths: {
    kz: 'kz'
  },
  shallowRender: true,
  localePath: path.resolve('./public/static')
})