import btnLabel from './btn-label.png'
import sochi from './sochi.png'
import ural from './ural.png'
import './leftCard.css'


export const Left = () => {
  return (
    <div className='left'>
        <div className='left_title'>1-й тур | Тинькофф РПЛ</div>  

        <div className='left_block'>
            <div className='left_mini'>
                <img className='left_mini_img' src={ural} alt='ural'/>
                <div className='left_mini-text'>урал</div>
            </div>
            <div className='left_score'>2 : 1</div>
            <div className='left_mini'>
                <img className='left_mini_img' src={sochi} alt='sochi'/>
                <div className='left_mini-text'>сочи</div>
            </div>
        </div>   
        
        <div className='left_footer'>
            <div className='left_footer_descr'>
                <div className='left_footer_title'>3 июля, 19:00</div>
                <div className='left_footer_subtitle'>Екатеренбург Арена</div>
            </div>
            <button className='left_footer_btn'>
                <img src={btnLabel} alt='btnlabel'/>
            </button>
        </div>
    </div>
  );
}
