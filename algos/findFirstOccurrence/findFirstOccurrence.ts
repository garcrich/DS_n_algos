const findFirstOccurrence = (haystack: string, needle: string) => {
  if (needle.length === 0) return 0;

  let needleIdx = -1;

  for(let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      needleIdx = i;
      break;
    }
  }
  return needleIdx;
}

export default findFirstOccurrence;