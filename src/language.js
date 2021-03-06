const objectAssignDeep = require('object-assign-deep')

const languages = {
  af: require(__dirname + '/lang/af.json'),
  ar: require(__dirname + '/lang/ar.json'),
  ca: require(__dirname + '/lang/ca.json'),
  cs: require(__dirname + '/lang/cs.json'),
  da: require(__dirname + '/lang/da.json'),
  de: require(__dirname + '/lang/de.json'),
  el: require(__dirname + '/lang/el.json'),
  en: require(__dirname + '/lang/en.json'),
  es: require(__dirname + '/lang/es.json'),
  fi: require(__dirname + '/lang/fi.json'),
  fr: require(__dirname + '/lang/fr.json'),
  he: require(__dirname + '/lang/he.json'),
  hu: require(__dirname + '/lang/hu.json'),
  it: require(__dirname + '/lang/it.json'),
  ja: require(__dirname + '/lang/ja.json'),
  ko: require(__dirname + '/lang/ko.json'),
  nl: require(__dirname + '/lang/nl.json'),
  no: require(__dirname + '/lang/no.json'),
  pl: require(__dirname + '/lang/pl.json'),
  pt: require(__dirname + '/lang/pt.json'),
  ro: require(__dirname + '/lang/ro.json'),
  ru: require(__dirname + '/lang/ru.json'),
  sr: require(__dirname + '/lang/sr.json'),
  sv: require(__dirname + '/lang/sv.json'),
  tr: require(__dirname + '/lang/tr.json'),
  uk: require(__dirname + '/lang/uk.json'),
  vi: require(__dirname + '/lang/vi.json'),
  zh: require(__dirname + '/lang/zh.json'),
  commands: {
    af: require(__dirname + '/lang/commands/af.json'),
    ar: require(__dirname + '/lang/commands/ar.json'),
    ca: require(__dirname + '/lang/commands/ca.json'),
    cs: require(__dirname + '/lang/commands/cs.json'),
    da: require(__dirname + '/lang/commands/da.json'),
    de: require(__dirname + '/lang/commands/de.json'),
    el: require(__dirname + '/lang/commands/el.json'),
    en: require(__dirname + '/lang/commands/en.json'),
    es: require(__dirname + '/lang/commands/es.json'),
    fi: require(__dirname + '/lang/commands/fi.json'),
    fr: require(__dirname + '/lang/commands/fr.json'),
    he: require(__dirname + '/lang/commands/he.json'),
    hu: require(__dirname + '/lang/commands/hu.json'),
    it: require(__dirname + '/lang/commands/it.json'),
    ja: require(__dirname + '/lang/commands/ja.json'),
    ko: require(__dirname + '/lang/commands/ko.json'),
    nl: require(__dirname + '/lang/commands/nl.json'),
    no: require(__dirname + '/lang/commands/no.json'),
    pl: require(__dirname + '/lang/commands/pl.json'),
    pt: require(__dirname + '/lang/commands/pt.json'),
    ro: require(__dirname + '/lang/commands/ro.json'),
    ru: require(__dirname + '/lang/commands/ru.json'),
    sr: require(__dirname + '/lang/commands/sr.json'),
    sv: require(__dirname + '/lang/commands/sv.json'),
    tr: require(__dirname + '/lang/commands/tr.json'),
    uk: require(__dirname + '/lang/commands/uk.json'),
    vi: require(__dirname + '/lang/commands/vi.json'),
    zh: require(__dirname + '/lang/commands/zh.json'),
  },
}

const get = (lang) => {
  return objectAssignDeep(languages['en'], languages[lang])
}

module.exports = languages
module.exports.get = get
