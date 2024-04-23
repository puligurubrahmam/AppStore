import './index.css'
const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails
  return (
    <li className="app-container">
      <img src={imageUrl} className="app-logo" alt={appName}/>
      <p className="app-heading">{appName}</p>
    </li>
  )
}
export default AppItem
