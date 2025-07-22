import './register.scss';
import Image from 'next/image';
import signin from '@public/images/icons/sign-up-icon.svg';

export default function RegisterForm() {
	return (
		<section className="register_form-wrapper">
			<div className="register_form-container">
				<div className="register_form-head">
					<Image
						className="signin_icon"
						src={signin}
						alt="sign in"
					/>
					<h1 className="register_title">Реєстрація</h1>
				</div>
				<form className="register_form">
					<div className="input_box">
						<input
							className="input_field"
							type="text"
							placeholder="Ім`я"
							name="name"
						/>
						<input
							className="input_field"
							type="tel"
							placeholder="Номер телефону"
							name="phone"
						/>
						<input
							className="input_field"
							type="email"
							placeholder="Емейл"
							name="email"
						/>
						<input
							className="input_field"
							type="password"
							placeholder="Пароль"
							name="password"
						/>
						<input
							className="input_field"
							type="password"
							placeholder="Повторіть пароль"
							name="confirmPassword"
						/>
					</div>

					<div className="checkbox_box">
						<label className="checkbox_label">
							<input
								className="checkbox_field"
								type="checkbox"
								name="notRobot"
							/>
							Я не робот
						</label>
					</div>

					<button
						type="submit"
						className="submit_button">
						Зареєструватися
					</button>
				</form>

				<div className="login_redirect">
					Вже маєте акаунт? <a href="/login">Увійдіть</a>
				</div>
			</div>
		</section>
	);
}
