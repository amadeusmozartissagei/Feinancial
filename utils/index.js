/**
 * Formats a number into Indonesian Rupiah format (e.g., 100.000).
 * @param {number} num - The number to format.
 * @returns {string} - The formatted number as a string in Rupiah format.
 */

const formatNumberToRupiah = (num) => {
  return new Intl.NumberFormat("id-ID").format(num);
};

export default formatNumberToRupiah;
