import './styles.scss'
import Image from '../../assets/avatar.jpeg'
export const WidgetLg=()=>{
  //Fazendo botão para teste
  const Button=({type})=>{
      return <button className={'widgetLgButton  ' + type}>{type}</button>
  }
  return(
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Lastest transactions</h3>
      <div className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser"> 
            <img src={Image} alt="widget" className="widgetLgImg" />
              <span className="widgetLgName">Paulo</span>
              </td>
              <td className="widgetLgDate">2 july 2002</td>
              <td className="widgetLgAmount">$5000</td>
              <td className="widgetLgStatus"><Button type='Aproved'/></td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser"> 
            <img src={Image} alt="widget" className="widgetLgImg" />
              <span className="widgetLgName">Paulo</span>
              </td>
              <td className="widgetLgDate">2 july 2002</td>
              <td className="widgetLgAmount">$5000</td>
              <td className="widgetLgStatus"><Button type='Pending'/></td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser"> 
            <img src={Image} alt="widget" className="widgetLgImg" />
              <span className="widgetLgName">Paulo</span>
              </td>
              <td className="widgetLgDate">2 july 2002</td>
              <td className="widgetLgAmount">$5000</td>
              <td className="widgetLgStatus"><Button type='Decline'/></td>
            </tr>
        </div>
      </div>
  )
}