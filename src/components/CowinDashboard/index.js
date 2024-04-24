// Write your code here
import './index.css'
import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import Loader from 'react-loader-spinner'

const apiStatusConstants = {
  initial: 'Initial',
  inprogress: 'inProgress',
  success: 'Success',
  failure: 'Failure',
}

class CowinDashboard extends Component {
  state = {apiStatus: apiStatusConstants.initial, dataList: []}

  componentDidMount() {
    this.getCowinDataApi()
  }

  getCowinDataApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inprogress})
    const options = {method: 'GET'}
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const resposne = await fetch(apiUrl, options)
    if (resposne.ok === true) {
      const data = await resposne.json()
      console.log(data)
      this.setState({apiStatus: apiStatusConstants.success, dataList: data})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {dataList} = this.state
    const {last_7_days_vaccination, vaccination_by_age, vaccination_by_gender} =
      dataList
    return (
      <>
        <div className="chart-container">
          <h1>Vaccination Coverage</h1>
          <VaccinationCoverage
            last_7_days_vaccination={last_7_days_vaccination}
          />
        </div>
        <div className="chart-container">
          <h1>Vaccination by gender</h1>
          <VaccinationByGender vaccination_by_gender={vaccination_by_gender} />
        </div>
        <div className="chart-container">
          <h1>Vaccination by Age</h1>
          <VaccinationByAge vaccination_by_age={vaccination_by_age} />
        </div>
      </>
    )
  }

  renderLoaderView = () => {
    return (
      <div data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
      </div>
    )
  }

  renderFailureView = () => {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
          className="failure-view-style"
        />
      </div>
    )
  }

  renderCoWINPageView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inprogress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="cowin-dashboard-bg-container">
        <div className="website-name-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo-style"
          />
          <h1 className="cowin-website-name">Co-WIN</h1>
        </div>
        <h1 className="cowin-heading">CoWIN Vaccination in India</h1>
        {this.renderCoWINPageView()}
      </div>
    )
  }
}

export default CowinDashboard
