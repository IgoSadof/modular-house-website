import React from "react"
const defaultState = {
  lang:'RU' ,
  toggleLang: (lang) => {defaultState.lang=lang},
}
const LangContext = React.createContext(defaultState)

const userLangEN = ['EN']
const userLangRU = ['RU']
const currentBrowserLang = (navigator?.language || navigator?.userLanguage || 'RU')?.slice(0,2).toUpperCase()

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