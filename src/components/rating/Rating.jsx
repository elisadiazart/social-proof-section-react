import style from './rating.module.scss';

const Rating = ({text}) => {
    return <div className={style['rating']}>
        <div className={style['rating__stars-container']}>
            <img src="./public/images/icon-star.svg" alt="" className={style['rating__star']}/>
            <img src="./public/images/icon-star.svg" alt="" className={style['rating__star']}/>
            <img src="./public/images/icon-star.svg" alt="" className={style['rating__star']}/>
            <img src="./public/images/icon-star.svg" alt="" className={style['rating__star']}/>
            <img src="./public/images/icon-star.svg" alt="" className={style['rating__star']}/>
        </div>
        <p className={style['rating__text']}>{text}</p>
    </div>
}

export default Rating