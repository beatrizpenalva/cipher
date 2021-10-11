const aCodeUpperCase = "A".charCodeAt();
const zCodeUpperCase = "Z".charCodeAt();
const aCodeLowerCase = "a".charCodeAt();
const zCodeLowerCase = "z".charCodeAt();
const alphabetLength = 26;

const isALetter = (letterCode) => {
  return (
    (aCodeUpperCase <= letterCode && letterCode <= zCodeUpperCase) ||
    (aCodeLowerCase <= letterCode && letterCode <= zCodeLowerCase)
  );
};

const isLowerOrUpper = (letterCode) => {
  return aCodeUpperCase <= letterCode && letterCode <= zCodeUpperCase
    ? aCodeUpperCase
    : aCodeLowerCase;
};

const decode = (codeASCII, letterACodeASCII, offset) => {
  return (
    ((codeASCII -
      letterACodeASCII -
      (+offset % alphabetLength) +
      alphabetLength) %
      alphabetLength) +
    letterACodeASCII
  );
};

const encode = (codeASCII, letterACodeASCII, offset) => {
  return (
    ((codeASCII - letterACodeASCII + +offset) % alphabetLength) +
    letterACodeASCII
  );
};

export const encrypt = (offset, message, method) => {
  const messageToEncode = Array.from(message);
  let finalMessage = "";

  // eslint-disable-next-line array-callback-return
  messageToEncode.map((item) => {
    const letterCode = item.charCodeAt();

    if (isALetter(letterCode)) {
      if (method === "encode") {
        return (finalMessage += String.fromCharCode(
          encode(letterCode, isLowerOrUpper(letterCode), offset)
        ));
      }
      if (method === "decode") {
        return (finalMessage += String.fromCharCode(
          decode(letterCode, isLowerOrUpper(letterCode), offset)
        ));
      }
    } else {
      return (finalMessage += String.fromCharCode(letterCode));
    }
  });
  return finalMessage;
};
