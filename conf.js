exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
//    'browserName': 'chrome'
    'browserName': 'firefox'
  },
  specs: ['spec/*-spec.js']
};
