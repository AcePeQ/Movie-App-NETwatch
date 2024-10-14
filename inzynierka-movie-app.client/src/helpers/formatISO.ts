const languagesConvert = new Intl.DisplayNames(["en"], { type: "language" });
const regionConvert = new Intl.DisplayNames(["en"], { type: "region" });

export function convertLanguageISO(code: string) {
  return languagesConvert.of(code);
}

export function convertRegionISO(code: string) {
  return regionConvert.of(code);
}
