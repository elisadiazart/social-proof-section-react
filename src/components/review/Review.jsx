import style from './review.module.scss';


const Review = ({src, user, text}) => {
	return <div className={style['review']}>
    <div className={style['review__user']}>
        <img src= {src} alt="" className={style['review__icon']}/>
        <div className={style['review__user-text']}>
            <p className={style['review__name']}>{user}</p>
            <p className={style['review__verified']}>Verified Buyer</p>
        </div>
    </div>
    <p className={style['review__text']}>{text}</p>
</div>
};

export default Review