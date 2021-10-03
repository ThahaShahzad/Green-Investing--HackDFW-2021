import { ESGDataSet } from 'public/q1'

export const getEsgData = (stock: string) => {
  for (let i = 0; i < ESGDataSet.length; i++) {
    if (ESGDataSet[i].stock_symbol == stock) {
      return {
        company: ESGDataSet[i].company_name,
        stock: ESGDataSet[i].stock_symbol,
        esg_score: ESGDataSet[i].total,
        esg_level: ESGDataSet[i].total_level,
        env_score: ESGDataSet[i].environment_score,
        env_level: ESGDataSet[i].environment_level,
        soc_score: ESGDataSet[i].social_score,
        soc_level: ESGDataSet[i].social_level,
        gov_score: ESGDataSet[i].governance_score,
        gov_level: ESGDataSet[i].governance_level
      }
    }
  }
}
