/**
 * Generate object with test id props if testId is defined
 * @param {string} testId
 * @param {string} [suffix]
 * @param {string} [testIdPropName='data-testid']
 * @returns {object} object containing test props
 */

export const getTestProps = (
  testId,
  suffix,
  testIdPropName = 'data-testid',
) => {
  if (!testId) return {};
  if (!suffix) {
    return { [testIdPropName]: testId };
  }
  return {
    [testIdPropName]: `${testId}-${suffix}`,
  };
};
