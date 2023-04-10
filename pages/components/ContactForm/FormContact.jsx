
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const FormContact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Ingresa tu nombre completo'),
    email: Yup.string().email('Por favor ingresa un correo electrónico válido').required('Ingresa tu dirección de correo electrónico'),
    companyName: Yup.string().required('¿Para quién trabajas?'),
    phone: Yup.string().matches(/^\d{10}$/, 'Por favor ingresa un número telefónico válido').required('Compártenos tus datos para que podamos comunicarnos contigo'),
    city: Yup.string().required('Por favor selecciona tu ciudad'),
    numPeople: Yup.number().required('¿Cuántas personas necesitan un espacio de trabajo?').positive('Por favor ingresa un número válido')
  });
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        companyName: '',
        phone: '',
        city: '',
        numPeople: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='contact-us__form'>
          <div className='contact-us__field-set'>
            <label className='contact-us__input'>
              <span className='contact-us__label'>Nombre Completo</span>
              <Field name='name' type="text" placeholder='Tu nombre completo' />
              <ErrorMessage name="name" component="div" className="contact-us__error" />
            </label>

            <label className='contact-us__input'>
              <span className='contact-us__label'>Correo Electronico</span>
              <Field name='email' type="email" placeholder='Direccion de correo electronico' />
              <ErrorMessage name="email" component="div" className="contact-us__error" />
            </label>
          </div>

          <div className='contact-us__field-set'>
            <label className='contact-us__input'>
              <span className='contact-us__label'>Nombre de la empresa</span>
              <Field name='companName' type="text" placeholder='Nombre de la empresa' />
              <ErrorMessage name="companyName" component="div" className="contact-us__error" />
            </label>

            <label className='contact-us__input'>
              <span className='contact-us__label'>Numero de telefono</span>
              <Field name='phone' type="tel" placeholder='Tu numero de telefono' />
              <ErrorMessage name="phone" component="div" className="contact-us__error" />
            </label>
          </div>

          <div className='contact-us__field-set'><label className='contact-us__input'>
            <span className='contact-us__label'>Ubicacion</span>
            <Field as="select" name="city" >
              <option value="Ciudad de México">Barranquilla</option>
              <option value="Guadalajara">Bogota</option>
              <option defaultValue value="Monterrey">Medellin</option>
            </Field>
            <ErrorMessage name="city" component="div" className="contact-us__error" />
          </label>

            <label className='contact-us__input'>
              <span className='contact-us__label'>Numero de personas que necesitan un espacio de trabajo</span>
              <Field name='numPeople' type="number" placeholder='Cuantas personas nesecitan un espacio de trabajo' />
              <ErrorMessage name="numPeople" component="div" className="contact-us__error" />
            </label></div>

          <p className='contact-us__disclaimer'>Al hacer clic en el botón a continuación, aceptas nuestras <Link href={'/'}>Condiciones de servicio</Link> y nuestra <Link href={'/'}>Política de privacidad</Link> global. </p>
          <button className='contact-us__submit' type="submit" disabled={isSubmitting}>
            Enviar
          </button>

        </Form>)}
    </Formik>
  )
}
