import { AppMode, AuthProvider } from "@arcana/auth";
import {useState} from "react";

const appID =" 511b324497b21542bb5cd538ac2ed1e953084264";

let auth;
function useArcanaAuth(){
    const[initialised, setInitialized] = useState(false);

    const initializeAuth = async() => {
        if(!auth){
            auth = new AuthProvider(appID);
            await auth.init({appMode: AppMode.NoUI});
        }
    }

    const login = async(socialType) => {
if(initialized){
    await auth.loginWithSocial(socialType);
}
    }

    const loginWithLink = async(email) => {
        if(initialized){
            await auth.loginWithLink(email);
        }
    }

    const isLoggedIn = async()=> {
        if(initialized){
            return await auth.isLoggedIn()
        }
    }

    const getAccounts = async()=> {
        if(initialized){
            return await auth.provider.request({methos: "eth_accounts"});
        }
    }

    const logout = async()=> {
        if(initialized){
            return await auth.logout();
        }
    }

    return{
initializeAuth,
login,
loginWithLink,
isLoggedIn,
getAccounts,
logout,
initialized
    };

}

export default useArcanaAuth;