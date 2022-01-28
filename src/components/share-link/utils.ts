export const fallbackCopyToClipboard = (ref: any) => {
  const selection: any = window.getSelection();
  const range: any = document.createRange();
  range.selectNodeContents(ref);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");

  return;
};
