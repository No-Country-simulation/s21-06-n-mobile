import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useAuth } from '@/hooks/useAuthentication';
import { useConfiguration } from '@/hooks/useColorScheme';

export default function GoogleLogin() {
  const { colorObject} = useConfiguration();
  const { handleLogin } = useAuth();



  const signIn = async () => {
    try {
      var s = await GoogleSignin.hasPreviousSignIn();
      
      console.log(s);
      if (s) {
        await GoogleSignin.signOut();
        console.log('deslogueo')
      }
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      var e = await GoogleSignin.getTokens();
      console.log(e.accessToken)
      await handleLogin({
        email : userInfo.data?.user.email ?? '',
        password: 'Test123!'
      })
      
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
      <Text style={[styles.textButton, {color: colorObject.textButton}]}>Sign in with Google</Text>
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
