// Write your code here
import './index.css'
const TabItem = props => {
  const {tabDetails, changeTabItem, activeClass} = props
  const {tabId, displayText} = tabDetails
  const changeTab = () => {
    changeTabItem(tabId)
  }
  const requiredClass = activeClass ? 'classStyle' : ''
  return (
    <li>
      <button onClick={changeTab} className={`btn ${requiredClass}`}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
