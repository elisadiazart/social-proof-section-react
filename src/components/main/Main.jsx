import Review from "../review/Review";
import styles from "./main.module.scss"


const Main = () => {
	return <main className={styles['main']}>
        <Review src='./public/images/image-colton.jpg' user='Colton Smith' text='“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”'/>
        <Review src='./public/images/image-irene.jpg' user='Irene Roberts' text='“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”'/>
        <Review src='./public/images/image-anne.jpg' user='Anne Wallace' text='“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”'/>
    </main>
};

export default Main