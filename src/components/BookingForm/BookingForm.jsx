import { useSelector } from 'react-redux';

import DatePicker from 'react-datepicker';
import toast from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import clsx from 'clsx';
import * as Yup from 'yup';

import { selectProduct } from '../../redux/productSlice.js';

import 'react-datepicker/dist/react-datepicker.css';

import css from './BookingForm.module.css';

const bookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  email: Yup.string().email('Invalid email!').required('Required!'),
  date: Yup.date().required('Required!'),
  comment: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
});

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const BookingForm = () => {
  const { item } = useSelector(selectProduct);

  const onSubmitHandler = (values, { resetForm }) => {
    console.log({
      ...values,
      id: item.id,
      carName: item.name,
    });
    toast.success('Booking success!');
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookingSchema}
      onSubmit={onSubmitHandler}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form className={css.form}>
          <h3 className={css.title}>Book your campervan now</h3>
          <p className={css.description}>Stay connected! We are always ready to help you.</p>

          <div className={css.fields}>
            <div className={css.field}>
              <Field placeholder="Name*" type="text" name="name" className={css.input}/>
              <ErrorMessage name="name" component="div" className={css.error}/>
            </div>

            <div className={css.field}>
              <Field placeholder="Email*" type="text" name="email" className={css.input}/>
              <ErrorMessage name="email" component="div" className={css.error}/>
            </div>

            <div className={css.field}>
              <Field name="date">
                {({field}) => (
                  <DatePicker
                    {...field}
                    placeholderText="Booking date*"
                    selected={values.date}
                    className={css.input}
                    onChange={(value) => setFieldValue('date', value)}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                  />
                )}
              </Field>
              <ErrorMessage name="date" component="div" className={css.error}/>
            </div>

            <div className={css.field}>
              <Field
                placeholder="Comment"
                type="text"
                name="comment"
                component="textarea"
                className={css.textarea}
              />
              <ErrorMessage name="comment" component="div" className={css.error}/>
            </div>
          </div>

          <button className={clsx(css.button, 'button')} type="submit" disabled={isSubmitting}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
