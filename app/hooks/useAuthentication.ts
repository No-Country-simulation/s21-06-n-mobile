import { useAuthStore } from '../store/useAuthStore';



export const useAuth = () => {
    const loginValues: ILogin = { email: '', password: '' };
    const { setUser } = useAuthStore();

    const handleLogout = async () => {
        await setUser(null); // Esto ya maneja SecureStore internamente
    };

    const handleLogin = async (values: ILogin) => {
        console.log(values);
        const userData = { id: '1', email: values.email }; // Agregar un ID de prueba
        await setUser(userData);
    };

    return {
        loginValues,
        handleLogin,
        handleLogout,
    };
};
