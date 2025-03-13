import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useAuth } from '@/hooks/useAuthentication';
import { useConfiguration } from '@/hooks/useConfiguration';

export default function GoogleLogin() {
  const { colorObject, t} = useConfiguration();
  const { handleLogin } = useAuth();



  const signIn = async () => {
    try {
      var s = await GoogleSignin.hasPreviousSignIn();
      if (s) {
        await GoogleSignin.signOut();
      }
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
     
      if (userInfo.data?.user) {
        var e = await GoogleSignin.getTokens();
        await handleLogin(userInfo.data.user)
      }
     

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing in');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available or outdated');
      } else {
        console.log(error);
      }
    }
  };

  return (
    <TouchableOpacity onPress={signIn} style={[styles.button, {backgroundColor: colorObject.buttonBackground}]}>
      <Image 
        source={require('../../assets/images/Google.png')}
      />
      <Text style={[styles.textButton, {color: colorObject.textButton}]}>{t("login.googleSignIn")}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button:{
    width: '100%',
    borderRadius: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10
  },
  textButton:{
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center'
  }
})
