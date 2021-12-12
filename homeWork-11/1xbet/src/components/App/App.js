import {Left} from '../leftCard/leftCard'
import {Middle} from '../middleCard/middleCard'
import {Right} from '../rightCard/rightCard'
import './App.css'


export const App = () => {
  return (
    <div className='promo'>
      <div className='container'>
        <Left />
        <Middle />
        <Right />
      </div>
    </div>
  );
}
