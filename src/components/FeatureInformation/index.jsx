import './styles.scss'
import {ArrowDownward, ArrowUpward}from '@material-ui/icons';
export const FeatureInformation=()=>{
  return(
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featureMoneyContainer">
            <span className="featureMoney">$453,00</span>
            <span className="featureMoneyRate">-11,00  <ArrowUpward className='featuredIcon'/> </span>
          </div>
          <span className="featureSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
        <span className="featuredTitle">Reavanue</span>
        <div className="featureMoneyContainer">
            <span className="featureMoney">$45,00</span>
            <span className="featureMoneyRate">-11,00  <ArrowDownward className='featuredIcon Negative' /> </span>
          </div>
          <span className="featureSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featureMoneyContainer">
            <span className="featureMoney">$4455,00</span>
            <span className="featureMoneyRate">-400,00  <ArrowDownward className='featuredIcon Negative'/> </span>
          </div>
          <span className="featureSub">Compared to last month</span>
        </div>
      </div>
  )
}