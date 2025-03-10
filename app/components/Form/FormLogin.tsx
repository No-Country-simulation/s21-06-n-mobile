import { useAuth } from '@/hooks/useAuthentication';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import GradientButton from '../Buttons/GradientButton';
import Input from './Input';

export default function FormLogin() {
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('login.errors.email.invalidEmail'))
      .required(t('login.errors.email.required')),
    password: Yup.string()
      .min(8, t('login.errors.password.min'))
      .max(50, t('login.errors.password.max'))
      .matches(/[a-z]/, t('login.errors.password.letterLower'))
      .matches(/[A-Z]/, t('login.errors.password.letterUpper'))
      .matches(/[0-9]/, t('login.errors.password.letterNumeric'))
      .matches(/[\W_]/, t('login.errors.password.specialCharacter'))
      .required(t('login.errors.password.required'))
  });

  const { loginValues, handleLogin } = useAuth();
  return (
    <Formik
      initialValues={loginValues}
      validationSchema={validationSchema}
      onSubmit={values => handleLogin(values)}
    >
      {({ handleChange, handleBlur, values, errors, touched, submitForm }) => (
        <View style={styles.container}>

          <Input Field={'email'} handleBlur={handleBlur} handleChange={handleChange} values={values} submitForm={submitForm} touched={touched.email} errors={errors.email} label={t('login.labels.email')} />
          <Input Field={'password'} handleBlur={handleBlur} handleChange={handleChange} values={values} submitForm={submitForm} touched={touched.password} errors={errors.password} security={true} label={t('login.labels.password')} />

        <GradientButton onPress={submitForm} title={t('login.button')} />
        </View>
      )}

    </Formik>
  )
}


const styles = StyleSheet.create({
  container :{
    flex: 1
  }
})