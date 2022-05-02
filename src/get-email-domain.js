const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let chars = email.split('')
  let index = chars.lastIndexOf('@') + 1
  return email.slice(index)
}

module.exports = {
  getEmailDomain
};
