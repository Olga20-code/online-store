import CartCard from './CartCard';
import flowerData from '../../_data/flowerData';
import Image from 'next/image';
import img from '@assets/img.png';

function ColumnCard() {
	return (
		<div className="column-card-container">
			{flowerData.map((flower) => (
				<CartCard
					flower={flower}
					trash={true}
					key={flower.id}
				/>
			))}
			<div className={'thx_block'}>
				<h2 className={'h2_image_thx'}>
					Дякуємо, що обираєте зелень! Ваш кошик уже пахне майбутнім.
				</h2>
				<Image
					width={235}
					height={276}
					src={img}
					alt={'thanking for all'}
				/>
			</div>
		</div>
	);
}

export default ColumnCard;
