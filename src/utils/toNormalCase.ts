export default function toNormalCase(string: string) {
  return string.replace(/([A-Z])/g, " $1").replace(/^./, function (char) {
    return char.toUpperCase();
  });
}
