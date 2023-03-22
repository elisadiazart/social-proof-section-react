import Rating from "../rating/Rating";
import Text from "../text/Text";
import Title from "../title/Title";
import style from "./header.module.scss"

const Header = () => {
	return <header className={style['header']}>
		<div>
		<Title/>
		<Text/>
		</div>
		<div>
		<Rating text='Rated 5 Stars in Reviews'/>
		<Rating text='Rated 5 Stars in Report Guru'/>
		<Rating text='Rated 5 Stars in BestTech'/>
		</div>
		</header> 

};

export default Header