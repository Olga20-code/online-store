'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import './styles.scss';
import { useSettings } from '@hooks/settings/useSettings';

export default function CatalogSection() {
	const { settings, isMobile } = useSettings();

	return (
		<section className="catalog_offers-section">
			<div className="catalog_offers-container">
				<h3 className="catalog_offers-title">
					Ознайомтеся з нашими пропозиціями
				</h3>
				<p className="catalog_offers-description">
					Знайдіть ідеальні рослини для вашого саду: від плодових дерев до
					яскравих квітів
				</p>
				{isMobile ? (
					<div className="catalog_offers-cards">
						<Slider {...settings}>
							<div className="catalog_offers-card">
								<Image
									src="/our_proposition/tree.png"
									alt="catalog-offer-1"
									width={288}
									height={349}
								/>
								<div className="catalog_offers-card-content">
									<span className="catalog_offers-card-title">Дерева | 40</span>
									<Link
										href="/catalog"
										className="catalog_offers-card-link">
										<Image
											src="/icons/next-arrow-icon.svg"
											alt="next-arrow-icon"
											width={30}
											height={30}
										/>
									</Link>
								</div>
							</div>
							<div className="catalog_offers-card">
								<Image
									src="/our_proposition/flower.png"
									alt="catalog-offer-1"
									width={288}
									height={349}
								/>
								<div className="catalog_offers-card-content">
									<span className="catalog_offers-card-title">Квіти | 40</span>
									<Link
										href="/catalog"
										className="catalog_offers-card-link">
										<Image
											src="/icons/next-arrow-icon.svg"
											alt="next-arrow-icon"
											width={30}
											height={30}
										/>
									</Link>
								</div>
							</div>
							<div className="catalog_offers-card">
								<Image
									src="/our_proposition/bush.png"
									alt="catalog-offer-1"
									width={288}
									height={349}
								/>
								<div className="catalog_offers-card-content">
									<span className="catalog_offers-card-title">Кущі | 40</span>
									<Link
										href="/catalog"
										className="catalog_offers-card-link">
										<Image
											src="/icons/next-arrow-icon.svg"
											alt="next-arrow-icon"
											width={30}
											height={30}
										/>
									</Link>
								</div>
							</div>
							<div className="catalog_offers-card">
								<Image
									src="/our_proposition/seedling.png"
									alt="catalog-offer-1"
									width={288}
									height={349}
								/>
								<div className="catalog_offers-card-content">
									<span className="catalog_offers-card-title">
										Розсада | 40
									</span>
									<Link
										href="/catalog"
										className="catalog_offers-card-link">
										<Image
											src="/icons/next-arrow-icon.svg"
											alt="next-arrow-icon"
											width={30}
											height={30}
										/>
									</Link>
								</div>
							</div>
						</Slider>
					</div>
				) : (
					<div className="catalog_offers-cards">
						<div className="catalog_offers-card">
							<Image
								src="/our_proposition/tree.png"
								alt="catalog-offer-1"
								width={288}
								height={349}
								className="catalog_offers-card-image"
							/>
							<div className="catalog_offers-card-content">
								<span className="catalog_offers-card-title">Дерева | 40</span>
								<Link
									href="/catalog"
									className="catalog_offers-card-link">
									<Image
										className="catalog_offers-card-link-icon"
										src="/icons/next-arrow-icon.svg"
										alt="next-arrow-icon"
										width={30}
										height={30}
									/>
								</Link>
							</div>
						</div>
						<div className="catalog_offers-card">
							<Image
								src="/our_proposition/flower.png"
								alt="catalog-offer-1"
								width={288}
								height={349}
								className="catalog_offers-card-image"
							/>
							<div className="catalog_offers-card-content">
								<span className="catalog_offers-card-title">Квіти | 40</span>
								<Link
									href="/catalog"
									className="catalog_offers-card-link">
									<Image
										className="catalog_offers-card-link-icon"
										src="/icons/next-arrow-icon.svg"
										alt="next-arrow-icon"
										width={30}
										height={30}
									/>
								</Link>
							</div>
						</div>
						<div className="catalog_offers-card">
							<Image
								src="/our_proposition/bush.png"
								alt="catalog-offer-1"
								width={288}
								height={349}
								className="catalog_offers-card-image"
							/>
							<div className="catalog_offers-card-content">
								<span className="catalog_offers-card-title">Кущі | 40</span>
								<Link
									href="/catalog"
									className="catalog_offers-card-link">
									<Image
										className="catalog_offers-card-link-icon"
										src="/icons/next-arrow-icon.svg"
										alt="next-arrow-icon"
										width={30}
										height={30}
									/>
								</Link>
							</div>
						</div>
						<div className="catalog_offers-card">
							<Image
								src="/our_proposition/seedling.png"
								alt="catalog-offer-1"
								width={288}
								height={349}
								className="catalog_offers-card-image"
							/>
							<div className="catalog_offers-card-content">
								<span className="catalog_offers-card-title">Розсада | 40</span>
								<Link
									href="/catalog"
									className="catalog_offers-card-link">
									<Image
										className="catalog_offers-card-link-icon"
										src="/icons/next-arrow-icon.svg"
										alt="next-arrow-icon"
										width={30}
										height={30}
									/>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="catalog_offers-link">
				<Link
					href="/catalog"
					className="catalog_offers-link-text">
					Дивитись усе
				</Link>
			</div>
		</section>
	);
}
