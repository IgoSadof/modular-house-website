import React from "react"
const defaultState = {
  lang:'RU' ,
  toggleLang: (lang) => {defaultState.lang=lang},
}
const LangContext = React.createContext(defaultState)

const userLangEN = ['EN-AU', 'EN-BZ', 'EN-CA', 'EN-CB', 'EN-GB', 'EN-IE', 'EN-JM', 'EN-NZ', 'EN-PH', 'EN-TT', 'EN-US', 'EN-ZA', 'EN-ZW', 'AF', 'SQ', 'AR-SA', 'AR-IQ', 'AR-EG', 'AR-LY', 'AR-DZ', 'AR-MA', 'AR-TN', 'AR-OM', 'AR-YE', 'AR-SY', 'AR-JO', 'AR-LB', 'AR-KW', 'AR-AE', 'AR-BH', 'AR-QA', 'EU', 'BG', 'BE', 'CA', 'ZH-TW', 'ZH-CN', 'ZH-HK', 'ZH-SG', 'HR', 'CS', 'DA', 'NL', 'NL-BE', 'EN', 'EN-US', 'EN-EG', 'EN-AU', 'EN-GB', 'EN-CA', 'EN-NZ', 'EN-IE', 'EN-ZA', 'EN-JM', 'EN-BZ', 'EN-TT', 'ET', 'FO', 'FA', 'FI', 'FR', 'FR-BE', 'FR-CA', 'FR-CH', 'FR-LU', 'GD', 'GD-IE', 'DE', 'DE-CH', 'DE-AT', 'DE-LU', 'DE-LI', 'EL', 'HE', 'HI', 'HU', 'IS', 'ID', 'IT', 'IT-CH', 'JA', 'KO', 'LV', 'LT', 'MK', 'MT', 'NO', 'PL', 'PT-BR', 'PT', 'RM', 'RO', 'RO-MO', 'SZ', 'SR', 'SK', 'SL', 'SB', 'ES', 'ES-AR', 'ES-GT', 'ES-CR', 'ES-PA', 'ES-DO', 'ES-MX', 'ES-VE', 'ES-CO', 'ES-PE', 'ES-EC', 'ES-CL', 'ES-UY', 'ES-PY', 'ES-BO', 'ES-SV', 'ES-HN', 'ES-NI', 'ES-PR', 'SX', 'SV', 'SV-FI', 'TH', 'TS', 'TN', 'TR', 'UR', 'VE', 'VI', 'XH', 'JI', 'ZU']
const userLangRU = ['RU', 'RU-RU', 'RU-MI', 'UK', 'BY', 'BE-BY', 'BE', 'UK-UA', 'TT-RU', 'TT', 'UZ', 'UZ-UZ']
const currentBrowserLang = typeof window !== 'undefined'? (navigator?.language || navigator?.userLanguage)?.slice(0,2).toUpperCase() : 'RU';

class LangProvider extends React.Component {
  state = {
    lang: (userLangEN.includes(currentBrowserLang)&&'EN')||(userLangRU.includes(currentBrowserLang)&&'RU')||'RU',
  }
  toggleLang = (lang) => {
    localStorage.setItem("lang", JSON.stringify(lang))
    this.setState({ lang })
  }
  componentDidMount() {
    const lsLang = JSON.parse(localStorage.getItem("lang"))
    if (lsLang) {
      this.setState({ lang: lsLang })
    }
  }
  render() {
    const { children } = this.props
    const { lang } = this.state
    return (
      <LangContext.Provider
        value={{
          lang,
          toggleLang: this.toggleLang,
        }}
      >
        {children}
      </LangContext.Provider>
    )
  }
}
export default LangContext
export { LangProvider }