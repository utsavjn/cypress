require('@packages/ui-components/cypress/support/customPercyCommand')({
  elementOverrides: {
    '.runnable-header .duration': ($el) => $el.text('XX:XX'),
    '.cy-tooltip': true,
  },
})
