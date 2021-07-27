import React, { useEffect, useState } from 'react';
import classes from './FlipCard.module.css';
import one from '../../../assets/images/16.jpeg'
import Chip from '../../../assets/images/chip.png'
import Visa from '../../../assets/images/visa.png'
import MasterCard from '../../../assets/images/mastercard.png'
import AMEX from '../../../assets/images/troy.png'
import MAESTRO from '../../../assets/images/jcb.png'
import RUPAY from '../../../assets/images/troy.png'
import VisaBG from '../../../assets/images/16.jpeg'
import MasterCardBG from '../../../assets/images/2.jpeg'
import MAESTROBG from '../../../assets/images/6.jpeg'
import AMEXBG from '../../../assets/images/10.jpeg'
import RUPAYBG from '../../../assets/images/4.jpeg'
const FlipCard = (props) => {
    const [source, setSource] = useState(Visa);
    const [sourceBg, setSourceBg] = useState(VisaBG)
    useEffect(() => {
        if (props.cardType.length === 0) {
            setSource(Visa)
            setSourceBg(VisaBG);
        }
        else if (props.cardType === 'MAESTRO') {
            setSource(MAESTRO)
            setSourceBg(MAESTROBG);
        }
        else if (props.cardType === 'AMEX') {
            setSource(AMEX)
            setSourceBg(AMEXBG);
        }
        else if (props.cardType === 'MASTERCARD') {
            setSource(MasterCard)
            setSourceBg(MasterCardBG);
        }
        else if (props.cardType === 'VISA') {
            setSource(Visa)
            setSourceBg(VisaBG);
        }
        else if (props.cardType === 'RUPAY') {
            setSource(RUPAY)
            setSourceBg(RUPAYBG);
        }
    }, [props.cardType])
    return (
        <div className={classes.flipCard}>
            <div className={classes.overlay} style={{ transform: props.cvvFocus ? ' rotateY(180deg)' : '' }}>  </div>
            <div className={classes.flipCardInner} style={{ transform: props.cvvFocus ? ' rotateY(180deg)' : '' }}>
                <div className={classes.flipCardFront} style={{ backgroundImage: `url(${sourceBg})`, borderRadius: '20px' }}>
                    <div className={classes.firstRow}>
                        <img src={Chip} className={classes.chip} alt="Chip" />
                        <img src={source} className={classes.company} alt="Chip" />
                    </div>
                    <div className={classes.secondRow}>
                        <h2>{props.number}</h2>
                    </div>
                    <div className={classes.thirdRow}>
                        <div className={classes.holder}>Card Holder<div className={classes.name}>{props.name}</div></div>
                        <div className={classes.expires}>Expires <div className={classes.date}>{props.month}/{props.year}</div></div>
                    </div>
                </div>
                <div className={classes.flipCardBack} style={{ backgroundImage: `url(${sourceBg})` }}>
                    <div className={classes.flipCardRowOne}>
                        <div className={classes.blackBand}></div>
                    </div>
                    <div className={classes.flipCardRowTwo}>
                    <span className={classes.cvv}>CVV</span>
                        <div className={classes.whiteBand}>
                            <p className={classes.cvvNumber}>{props.cvv}</p>
                        </div>

                    </div>
                    <div className={classes.flipCardRowThree}>
                        <img src={source} className={classes.company} alt="Chip" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(FlipCard);