import React from 'react';
import './about.scss';
import Button from '@ui/Button';
import Catalog from '@components/main/catalog-section/CatalogSection';
import AdditionalInfo from '@ui/advantagesList/AdvantagesListItem';
export default function AboutUs() {
	return (
		<div className="about_container">
			<div className="to_catalog">
				<h1 className="about_title">Найкращі саджанці в GreenShop</h1>
				<span className="about_title-span">
					Обирайте якісні саджанці, розсаду та рослини для будь-якого сезону та
					клімату
				</span>
				<Button
					text="До каталогу"
					className="to_catalog-button"
				/>
			</div>
			<div className="about_us">
				<div className="about_description">
					<h2 className="about_description-title">Про нас</h2>
					<p className="about_description-text">
						GreenShop — це не просто магазин саджанців. Це місце, де починається
						любов до природи, де кожен паросток має значення, а кожна квітка —
						історію.
					</p>
				</div>
				<div className="our_advantages">
					<ul className="our_advantages-list">
						<AdditionalInfo />
					</ul>
				</div>
			</div>
			<div className="catalog">
				<Catalog />
			</div>
		</div>
	);
}
