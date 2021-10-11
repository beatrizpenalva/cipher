export const encrypt = (offset, message, method) => {
  const messageToEncode = Array.from(message);
  const alphabetLength = 26;
  const aCodeUpperCase = "A".charCodeAt();
  const zCodeUpperCase = "Z".charCodeAt();
  const aCodeLowerCase = "a".charCodeAt();
  const zCodeLowerCase = "z".charCodeAt();
  let finalMessage = "";

    messageToEncode.map((item) => {
      const codeASCII = item.charCodeAt();
      if (
        (aCodeUpperCase <= codeASCII && codeASCII <= zCodeUpperCase) ||
        (aCodeLowerCase <= codeASCII && codeASCII <= zCodeLowerCase)
      ) {
        const isLowerOrUpper =
          aCodeUpperCase <= codeASCII && codeASCII <= zCodeUpperCase
            ? aCodeUpperCase
            : aCodeLowerCase;
        if (method === "encode") {
          const letterEncoded = encode(
            codeASCII,
            isLowerOrUpper,
            offset,
            alphabetLength
          );
          return (finalMessage += String.fromCharCode(letterEncoded));
        }
        if (method === "decode") {
          const letterDecoded = decode(
            codeASCII,
            isLowerOrUpper,
            offset,
            alphabetLength
          );
          return (finalMessage += String.fromCharCode(letterDecoded));
        }
      } else {
        return (finalMessage += String.fromCharCode(codeASCII));
      }
    });
    return finalMessage;
};

const decode = (codeASCII, letterACodeASCII, offset, alphabetLength) => {
  return (
    ((codeASCII -
      letterACodeASCII -
      (offset % alphabetLength) +
      alphabetLength) %
      alphabetLength) +
    letterACodeASCII
  );
};

const encode = (codeASCII, letterACodeASCII, offset, alphabetLength) => {
  return (
    ((codeASCII - letterACodeASCII + offset) % alphabetLength) +
    letterACodeASCII
  );
};
