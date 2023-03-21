import style from './rating.module.scss';

const Rating = () => {
    return <div className={style['rating']}>
        <div className={style['rating__stars-container']}>
            <img src="./public/images/icon-star.svg" alt="" className={style['rating__star']}/>
            <img src="./public/images/icon-star.svg" alt="" className={style['rating__star']}/>
            <img src="./public/images/icon-star.svg" alt="" className={style['rating__star']}/>
            <img src="./public/images/icon-star.svg" alt="" className={style['rating__star']}/>
            <img src="./public/images/icon-star.svg" alt="" className={style['rating__star']}/>
        </div>
    </div>
}

export default Rating