import {useCallback, useEffect, useState} from 'react'
import spartak from './spartak.png'
import loco from './locomotiv.png'
import ticket from './ticket.png'
import polygon from './polygon.png'
import './middleCard.css'

const defaultTimeRemaining = {
    hours: '00',
    minutes: '00',
    seconds: '00'
}

export const Middle = () => {
    // Timer 
    const [remainingTime, setRemainingTime] = useState(defaultTimeRemaining)
    
    const deadline = '2021-12-14T18:20:00';

    const getTimeRemaining = useCallback((endtime) => {
        const total = Date.parse(endtime) - Date.parse(new Date()),
            hours = Math.floor(total / (1000 * 60 * 60)),
            minutes = Math.floor((total / (1000 * 60) % 60)),
            seconds = Math.floor(total / 1000 % 60);
            if (total <= 0) {
                return {
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                };
            }
        return {
            hours: getZero(hours),
            minutes: getZero(minutes),
            seconds: getZero(seconds)
        };
    },[])

    const updateRemainingTime = useCallback((endtime) => {
        setRemainingTime(getTimeRemaining(endtime))
    }, [getTimeRemaining])

    useEffect(() => {
        const timerId = setInterval(() => {
            updateRemainingTime(deadline)
        }, 1000)
        return () => clearInterval(timerId)
    },[updateRemainingTime])

    const getZero = (num) => {
        if (num >= 0 && num <= 9) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    // 

    const HandlerAlertTicket = () => {
        alert('Buy Ticket')
    }

    const HandlerAlertBet = () => {
        alert('3.82')
    }

    const HandlerAlertWatch = () => {
        alert('Watch')
    }

    return (
        <div className='middle'>
            <div className='title'>1-й тур | Тинькофф РПЛ</div>

            <div className='block_timer'>
                <div className='mini'>
                    <img className='mini_img' src={spartak} alt='spartak'/>
                    <div className='mini-text'>cпартак</div>
                </div>
                <div className='timer'>{remainingTime.hours} : {remainingTime.minutes} : {remainingTime.seconds}</div>
                <div className='mini'>
                    <img className='mini_img' src={loco} alt='loco'/>
                    <div className='mini-text'>локомотив</div>
                </div>
            </div>

            <div className='block_bet'>
                <div className='descr'>
                    <div className='descr_title'>19 июля, 19:00</div>
                    <div className='descr_subtitle'>Открытие Банк Арена</div>
                </div>

                <div className='wrap_btns_bet'>
                    <div className='wrap_btns'>
                        <button onClick={HandlerAlertBet} className='wrap_btns_btn'>3.82</button>
                        <button onClick={HandlerAlertBet} className='wrap_btns_btn'>3.82</button>
                        <button onClick={HandlerAlertBet} className='wrap_btns_btn active'>3.82</button>
                    </div>
                    <div className='wrap_text'>
                        <span className='wrap_text_elem'>П1</span>
                        <span className='wrap_text_elem'>x</span>
                        <span className='wrap_text_elem'>П2</span>
                    </div>
                </div>

                <button onClick={HandlerAlertTicket} className='block_bet_btn'>
                    <img src={ticket} alt='ticket'/>
                    <div className='block_bet_btn-text'>купить билет</div>
                    <div className='block_bet_btn-text db'>купить</div>
                </button>
            </div>

            <button onClick={HandlerAlertWatch} className='middle_btn'>
                смотреть трансляцию матча
                <span className='polygon'>
                    <img className='polygon_img' src={polygon} alt='polygon'/>
                </span>
            </button>
        </div>
    );
}
