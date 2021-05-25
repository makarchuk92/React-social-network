import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useSelector } from 'react-redux';
import { getUsersFilter } from '../../redux/users-selectors';
import { FilterType } from '../../redux/usersReducer';

const usersSearchFormValidate = (values: any) => {
   const errors = {};
   return errors;
}

type FriendFormType = 'true' | 'false' | 'null'
type FormType = {
   term: string
   friend: FriendFormType
}

type PropsType = {
   onFilterChanget: (filter: FilterType) => void
}

const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
   const filter = useSelector(getUsersFilter)
   const submit = (values: FormType,
       { setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
          const filter: FilterType = {
             term: values.term,
             friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false  
          }
         props.onFilterChanget(filter)
         setSubmitting(false)
   }
   return (
      <Formik
         enableReinitialize
         initialValues={{ term: filter.term, friend: String(filter.friend) as  FriendFormType}}
         validate={usersSearchFormValidate}
         onSubmit={submit}
      >
         {({ isSubmitting }) => (
            <Form>
               <Field type="text" name="term" />
               <Field as="select" name="friend">
                  <option value="null">All</option>
                  <option value="true">Followed</option>
                  <option value="false">Unfollowed</option>
               </Field>
               <button type="submit" disabled={isSubmitting}> Find </button>
            </Form>
         )}
      </Formik>
   )
})

export default UsersSearchForm