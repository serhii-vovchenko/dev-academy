import s from './Contact.module.css';
import imgPath from '../../assets/img/hero/hero-img.png';
import Container from '../Container/Container';
import { Field, Formik, Form } from 'formik';

const Contact = () => {
	return (
		<section className={s.section}>
			<Container>
				<h2>Зв'язок з нами</h2>
				<div className={s.wrapper}>
					<div className={s.textBlock}>
						<h3>Є питання? Зв’яжіться з нами!</h3>
						<p>
							Наша команда готова допомогти вам з будь-якими питаннями, які у вас можуть виникнути.
							Просто заповніть форму нижче і ми з вами зв’яжемось протягом 24 годин.
						</p>
						<img src={imgPath} alt="image" width="184" height="153" />
					</div>

					<Formik
						initialValues={{ name: '', email: '', phone: '' }}
						onSubmit={(values, { resetForm }) => {
							console.log(values);
							resetForm();
						}}
					>
						<Form className={s.form}>
							<Field
								className={s.input}
								name="name"
								type="text"
								placeholder="Ваше ім’я*"
								required
							/>
							<Field
								className={s.input}
								name="email"
								type="email"
								placeholder="Ваш email*"
								required
							/>
							<Field
								className={s.input}
								name="phone"
								type="tel"
								placeholder="Ваш номер телефону*"
								required
							/>
							<p>
								Залишаючи свої дані, я погоджуюся на обробку персональних даних відповідно до{' '}
								<a href="#">Політики конфіденційності</a>
							</p>
							<button type="submit">Відправити</button>
						</Form>
					</Formik>
				</div>
			</Container>
		</section>
	);
};

export default Contact;
