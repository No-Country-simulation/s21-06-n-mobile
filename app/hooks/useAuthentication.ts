import { useAuthStore } from '../store/useAuthStore';
import * as SecureStore from 'expo-secure-store';


export const useAuth = () => {
    const loginValues: ILogin = { email: '', password: '' };
    const { setUser } = useAuthStore();
    const handleLogout = async () => {
        await SecureStore.deleteItemAsync('user')
        await setUser(null);
    };

    const handleLogin = async (values: ILogin) => {
        console.log(values);
        const userData = { id: '1', email: values.email };
        await setUser(userData);
    };

    return {
        loginValues,
        handleLogin,
        handleLogout,
    };
};
