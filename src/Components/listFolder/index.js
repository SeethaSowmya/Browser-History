import './index.css'

const Lists = props => {
  const {Details} = props
  const {timeAccessed, logoUrl, title, domainUrl} = Details

  return (
    <li>
      <div className="local">
        <div className="white">
          <p>{timeAccessed}</p>

          <div className="centerItem">
            <div className="item">
              <img src={logoUrl} alt="domain logo" />
              <p className="domain1">{title}</p>
              <p className="domain">{domainUrl}</p>
            </div>
          </div>
          <div>
            <button type="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
        <div />
      </div>
    </li>
  )
}

export default Lists
