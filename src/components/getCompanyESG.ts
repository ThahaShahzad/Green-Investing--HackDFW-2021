import esgJson from 'public/q1.json'

export const getEsgData = (stock: string) => {
  for (let i = 0; i < esgJson.length; i++) {
    if (esgJson[i].stock_symbol == stock) {
      return {
        company: esgJson[i].company_name,
        stock: esgJson[i].stock_symbol,
        esg_score: esgJson[i].total,
        esg_level: esgJson[i].total_level,
        env_score: esgJson[i].environment_score,
        env_level: esgJson[i].environment_level,
        soc_score: esgJson[i].social_score,
        soc_level: esgJson[i].social_level,
        gov_score: esgJson[i].governance_score,
        gov_level: esgJson[i].governance_level
      }
    }
  }
}
