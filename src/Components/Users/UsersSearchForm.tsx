import { Field, Form, Formik } from 'formik';
import React from 'react'
import { FilterType } from '../../redux/usersReducer';

const usersSearchFormValidate = (values: any) => {
   const errors = {};
   return errors;
}


const UsersSearchForm = () => {
   const submit = (values: FilterType,
       { setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
      setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         setSubmitting(false);
      }, 400);
   }
   return (
      <Formik
         initialValues={{ term: '' }}
         validate={usersSearchFormValidate}
         onSubmit={submit}
      >
         {({ isSubmitting }) => (
            <Form>
               <Field type="text" name="term" />
               <button type="submit" disabled={isSubmitting}>
                  Find
          </button>
            </Form>
         )}
      </Formik>
   )
}

export default UsersSearchForm