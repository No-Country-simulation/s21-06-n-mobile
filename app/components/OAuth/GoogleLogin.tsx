import React from 'react';
import { Button, View } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useAuth } from '@/hooks/useAuthentication';

export default function GoogleLogin() {
  
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
        email : "",
        password: ''
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
    <View>
      <Button title="Sign in with Google" onPress={signIn} />
    </View>
  );
}
