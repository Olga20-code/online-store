import logo from '@assets/Logo.svg';
import Image from 'next/image';
import { LogoFormProps } from './IContact';

function LogoForm({ className }: LogoFormProps) {
	return (
		<Image
			className={className}
			src={logo}
			width={100}
			height={89}
			alt="GreenShop"
		/>
	);
}

export default LogoForm;
