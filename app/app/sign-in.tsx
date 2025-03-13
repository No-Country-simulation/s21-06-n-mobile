import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';
import { useAuthStore } from '@/store/useAuthStore';
import FormLogin from '@/components/Form/FormLogin';
import GoogleLogin from '@/components/OAuth/GoogleLogin';
import { useConfiguration } from '@/hooks/useColorScheme';

const Login = () => {
  const {User}  = useAuthStore(state => state);
  const { t, colorObject } = useConfiguration();

  if (User) {
    return <Redirect href='/(app)/(home)' />;
  }

  return (
    <View style={[styles.container, { backgroundColor: colorObject.background }]}>
      <View>
        <Image  source={require('../assets/images/ImageLogin.png')} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: colorObject.text }]}>{t('welcome')}</Text>
        <Text style={[styles.text, { color: colorObject.text }]}>
          {t('login.description')}
        </Text>
      </View>
      {/* <View style={styles.formContain}>
        <FormLogin />
      </View> */}
      <View style={styles.OAuthContainer}>
        <View style={styles.iconsContainer}>
          <GoogleLogin />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    marginTop: 50
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
  OAuthContainer:{
    flex: 1,
    alignItems: 'center'
  },
  iconsContainer:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20
  }
});

export default Login;
