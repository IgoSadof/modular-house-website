import React from "react"
const defaultState = {
  lang:'RU' ,
  toggleLang: (lang) => {defaultState.lang=lang},
}
const LangContext = React.createContext(defaultState)

const userLangEN = ['AF', 'SQ', 'AR', 'EU', 'BG', 'BE', 'CA', 'ZH', 'HR', 'CS', 'DA', 'NL', 'NL', 'EN', 'ET', 'FO', 'FA', 'FI', 'FR', 'GD', 'DE', 'EL', 'HE', 'HI', 'HU', 'IS', 'ID', 'IT', 'JA', 'KO', 'LV', 'LT', 'MK', 'MT', 'NO', 'PL', 'PT', 'RM', 'RO', 'SZ', 'SR', 'SK', 'SL', 'SB', 'ES', 'SX', 'SV', 'TH', 'TS', 'TN', 'TR', 'UR', 'VE', 'VI', 'XH', 'JI', 'ZU']
const userLangRU = ['RU', 'UK', 'BY', 'BE', 'UK', 'TT', 'UZ', 'KZ']
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