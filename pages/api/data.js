import delve from 'dlv';

export async function checkRequiredData(section) {
  return section;
}

export async function getDataDependencies(json) {
  let sections = delve(json, 'sections', []);
  sections = await Promise.all((sections).map(checkRequiredData));
    return {
      ...json,
      sections,
    }
}