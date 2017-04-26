const backgroundColor = 'bg-near-black'
const textColor = 'yellow'
const paddingAll = 'pa2'
const borderRound = 'br2'
const h2 = 'fw1 f3 mt1 mb0'
const parentBorderColor = 'b--black-90'
const childBorderColor = 'b--black-10'

const defaultTheme = {
  themeName: 'near black and yellow',
  themeStyles: {
    panelBorder: `ba ${borderRound} ${backgroundColor} ${parentBorderColor}`,
    panelHeader: `${paddingAll} ${backgroundColor} ${textColor}`,
    panelH2: `${h2}`,
    panelChildrenSection: `${paddingAll} ${backgroundColor}`,
    panelFooter:  `${paddingAll} ${backgroundColor} ${textColor}`,
    panelButtonDiv: `fr`,
    panelButton: `ba dim ${paddingAll} ${backgroundColor} ${textColor}`,
    listUl: `list pl0 mt0 measure center`,
    imageListItemLi: `flex items-center lh-copy ${paddingAll} ph0-l bb ${childBorderColor}`,
    imageListItemImg: `w2 h2 w3-ns h3-ns br-100`,
    imageListItemDiv: `pl3 flex-auto`,
    imageListItemSpanTitle: `f6 db ${textColor}`,
    imageListItemSpanDescription: `f6 db ${textColor}`,
    simpleListItemLi: `flex items-center lh-copy ${paddingAll} ph0-l bb ${childBorderColor}`,
    simpleListItemDiv: `pl3 flex-auto`,
    simpleListItemSpanTitle: `f6 db ${textColor}`,
    simpleListItemSpanDescription: `f6 db ${textColor}`,
    cardArticle: `mw5 center ${backgroundColor} ${borderRound} ${paddingAll} pa4-ns mv3 ba ${childBorderColor}`,
    cardDiv: `tc`,
    cardImg: `br-100 h4 w4 dib ba ${childBorderColor} ${paddingAll}`,
    cardH1: `f3 mb2`,
    cardH2: `f5 fw4 ${textColor} mt0`,
    button: `f6 link dim ph3 pv2 mb2 dib ${textColor} ${backgroundColor}`
  }
}

export default defaultTheme
