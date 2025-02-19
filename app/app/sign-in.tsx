import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { useAuthStore } from '@/store/useAuthStore';
import { Colors } from '@/constants/Colors';
import FormLogin from '@/components/Form/FormLogin';

const Login = () => {
  const {User}  = useAuthStore(state => state);
  const { t } = useTranslation();
  const colorScheme = useColorScheme();
  const colorObject = Colors[colorScheme ?? 'light'];

  if (User) {
    return <Redirect href='/(app)/(home)' />;
  }

  return (
    <View style={[styles.container, { backgroundColor: colorObject.background }]}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: colorObject.text }]}>{t('welcome')}</Text>
        <Text style={[styles.text, { color: colorObject.text }]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam enim, eum obcaecati tempora dicta, nemo illo accusantium nisi, nesciunt debitis voluptas doloremque autem impedit voluptatum nulla et? Eaque, omnis vel.
        </Text>
      </View>
      <View style={styles.formContain}>
        <FormLogin />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  titleContainer: {
    width: '90%',
    flex: 1,
  },
  formContain: {
    flex: 3,
    width: '90%',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    paddingBottom: 10,
  },
  text: {
    color: '#252525',
  },
});

export default Login;
