export const IS_DEV = process.env.NODE_ENV === "development";

/**
 * Find substring and wrap in <strong /> tag
 * @param {string} str - The string to search
 * @param {string} subString - The substring to find
 * @return {Obj} newStr - Object with text and match bool
 */
export const highlightSubString = (str, subString) => {
  const caseInsensitiveRegex = new RegExp(subString, "gi");
  const newStr = str.replace(
    caseInsensitiveRegex,
    (match) => `<strong>${match}</strong>`
  );

  return {
    text: subString === "" ? str : newStr,
    match: newStr !== str,
  };
};
