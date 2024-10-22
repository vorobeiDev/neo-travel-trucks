import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import MaskedInput from 'react-text-mask';
import * as Yup from 'yup';

import { addContact } from '../../redux/contactsOps.js';

import css from './ContactForm.module.css'

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z ]+$/, 'Only letters are allowed')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Required field'),
  phone: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, 'Wrong format, use XXX-XXX-XXXX')
    .required('Required field'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{name: '', phone: ''}}
      validationSchema={contactSchema}
      onSubmit={(values, {resetForm}) => {
        dispatch(addContact(values));
        resetForm();
      }}
    >
      {({isSubmitting, setFieldValue}) => (
        <Form className={css.form}>
          <div className={css.field}>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" className={css.input}/>
            <ErrorMessage name="name" component="div" className={css.errorMessage}/>
          </div>

          <div className={css.field}>
            <label htmlFor="phone">Phone Number</label>
            <Field name="phone">
              {({field}) => (
                <MaskedInput
                  {...field}
                  mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/ , '-', /\d/, /\d/, /\d/, /\d/]}
                  onChange={(e) => setFieldValue('phone', e.target.value)}
                />
              )}
            </Field>
            <ErrorMessage name="phone" component="div" className={css.errorMessage}/>
          </div>

          <button type="submit" disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  )
};

export default ContactForm;
