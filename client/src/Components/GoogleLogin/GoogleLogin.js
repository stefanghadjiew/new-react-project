import { useGoogleLogin } from 'react-google-login';

const GoogleLoginLogic = () => {

    const clientId = process.env.REACT_APP_OAUTH_CLIEND_ID;

    const refreshTokenSetup = res => {
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5*60) * 1000;

        const refreshToken = async () => {
            const newAuthRes = await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 - 5*60) * 1000;
            setTimeout(refreshToken,refreshTiming)
        }
        setTimeout(refreshToken,refreshTiming);
    }

    const onSuccess = res =>  {
        console.log(res)
        refreshTokenSetup(res)   
    } ;
    const onFailure = res => console.log(res);

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        cookiePolicy: 'single_host_origin'
        
    })

    return signIn;
}

export default GoogleLoginLogic;
