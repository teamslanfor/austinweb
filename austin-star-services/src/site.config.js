/**
 * Single source of truth for business details.
 * Source: the business's current website https://austinstarservices.com/ (services, address, hours, service areas,
 * license number) plus the phone and email supplied by the client.
 * Edit here, then run `npm run build`. Items marked CONFIRM should be checked with the owner.
 */
module.exports = {
  name: 'Austin Star Services LLC',
  shortName: 'Austin Star Services',
  brandSub: 'Heating & Air Conditioning',
  tagline: 'Making homes safer, healthier, smarter and more efficient.',
  lang: 'en-US',
  locale: 'en_US',
  url: 'https://austinstarservices.com', // the existing domain
  area: 'Austin, Travis County, Kyle, Buda, San Marcos & Dripping Springs',
  phone: '(512) 203-0765',
  phoneIntl: '+15122030765',
  phoneHref: 'tel:+15122030765',
  whatsapp: '',
  whatsappNumber: '',
  address: { street: '9300 South IH-35, Suite A-500', city: 'Austin', region: 'TX', postcode: '78748', country: 'US' },
  addressLine: '9300 South IH-35, Suite A-500, Austin, TX 78748',
  mapQuery: '9300 South IH-35, Suite A-500, Austin, TX 78748',
  license: 'TACLB26861E',
  yell: 'https://www.yelp.com/search?find_desc=Austin+Star+Services&find_loc=Austin%2C+TX', // CONFIRM: replace with the exact Yelp business page
  reviewSiteName: 'Yelp',
  hours: [['Monday – Friday', '9:00 AM – 5:00 PM'], ['Saturday – Sunday', 'Closed']],
  openFrom: 9, openTo: 17,
  hoursShort: 'Mon–Fri 9:00 AM – 5:00 PM',
  hoursLabel: 'Monday to Friday, 9 AM to 5 PM',
  openingHoursSchema: 'Mo-Fr 09:00-17:00',
  schemaType: 'HVACBusiness',
  schemaDescription: 'Residential and commercial heating and air conditioning in Austin, TX: AC and heating repair, installation, tune-ups, duct sealing, weatherization, indoor air quality and water damage restoration.',
  footerAbout: 'Heating and air conditioning for homes and businesses across Austin and Travis County. Making homes safer, healthier, smarter and more efficient.',
  ctaTitle: 'Need heating or AC help?',
  ctaText: 'Call us or request a free quote and we’ll get back to you.',
  headerCta: 'Free quote',
  manifestShort: 'Austin Star',

  // Quote form + chatbot leads are emailed here via FormSubmit (formsubmit.co). The FIRST submission sends a
  // one-time activation email to this inbox – click the link in it once.
  email: 'lateraustinstar512@yahoo.com',
  formEndpoint: null,

  socials: [
    { label: 'Austin Star Services on Yelp', icon: 'star', url: 'https://www.yelp.com/search?find_desc=Austin+Star+Services&find_loc=Austin%2C+TX' },
  ],
};
if (!module.exports.formEndpoint && module.exports.email) {
  module.exports.formEndpoint = 'https://formsubmit.co/ajax/' + module.exports.email;
}
