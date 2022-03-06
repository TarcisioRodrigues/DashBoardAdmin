import { Chart } from '../../components/Chart'
import { FeatureInformation } from '../../components/FeatureInformation'
import { userdata } from '../../dummyData'
import './styles.scss'
export const Home=()=>{
  return(
    <div className="home">
     <FeatureInformation/>
     <Chart data={userdata} title='User Analytics' grid dataKey='Active User' />
     <div className="homeWidget"></div>
      </div>
  )
}