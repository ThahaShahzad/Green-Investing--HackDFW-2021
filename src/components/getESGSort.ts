import { ESGDataSet } from 'public/q1'

export enum sortByEnum {
  ESG = 'esg',
  ENV = 'env',
  SOC = 'soc',
  GOV = 'gov'
}
export const getESGSort = (sortBy: sortByEnum) => {
  let esgData = ESGDataSet
  if (sortBy === sortByEnum['ESG']) {
    esgData.sort((a, b) =>
      a.total < b.total ? 1 : a.total === b.total ? (a.environment_score < b.environment_score ? 1 : -1) : -1
    )
    // esgData = esgJson
  } else if (sortBy === sortByEnum['ENV']) {
    esgData.sort((a, b) =>
      a.environment_score < b.environment_score
        ? 1
        : a.environment_score === b.environment_score
        ? a.social_score < b.social_score
          ? 1
          : -1
        : -1
    )
  } else if (sortBy === sortByEnum['SOC']) {
    esgData.sort((a, b) =>
      a.social_score < b.social_score
        ? 1
        : a.social_score === b.social_score
        ? a.environment_score < b.environment_score
          ? 1
          : -1
        : -1
    )
  } else if (sortBy === sortByEnum['GOV']) {
    esgData.sort((a, b) =>
      a.governance_score < b.governance_score
        ? 1
        : a.governance_score === b.governance_score
        ? a.environment_score < b.environment_score
          ? 1
          : -1
        : -1
    )
  }

  return esgData
}
