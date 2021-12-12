import cska from './cska.png'
import dinamo from './dinamo.png'
import ticket from './ticket.png'
import './rightCard.css'


export const Right = () => {
    return (
        <div className='right'>
            <div className='right_title'>1-й тур | Тинькофф РПЛ</div>  
    
            <div className='right_block'>
                <div className='right_mini'>
                    <img className='right_mini_img' src={cska} alt='cska'/>
                    <div className='right_mini-text'>цска</div>
                </div>
                <div className='right_score'>-:-</div>
                <div className='right_mini'>
                    <img className='right_mini_img' src={dinamo} alt='dinamo'/>
                    <div className='right_mini-text'>динамо</div>
                </div>
            </div>   
            
            <div className='right_footer'>
                <div className='right_footer_descr'>
                    <div className='right_footer_title'>24 июля, 19:00</div>
                    <div className='right_footer_subtitle'>ВЭБАрена</div>
                </div>
                <button className='right_footer_btn'>
                    <img src={ticket} alt='ticket'/>
                </button>
            </div>
        </div>
    );
}
