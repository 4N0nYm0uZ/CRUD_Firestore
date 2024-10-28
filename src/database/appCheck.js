// Membuat App Check untuk mengamankan request firestore
// Debug Token: 60815B24-FEE3-495B-A7AD-6A4554DA4413
// website1: https://medium.com/@vibhavguria07/level-up-your-app-security-implementing-firebase-app-check-in-react-native-9c7409d56504
// website2: https://rnfirebase.io/app-check/usage

import { firebase } from '@react-native-firebase/app-check'


const AppCheck = async () => {
    const appCheck = firebase.appCheck()

    const rnfbProvider = appCheck.newReactNativeFirebaseAppCheckProvider()
    rnfbProvider.configure({
        android: {
            provider: __DEV__ ? 'debug' : 'playIntegrity',
            debugToken: '60815B24-FEE3-495B-A7AD-6A4554DA4413'
        },
        apple: {
            provider: __DEV__ ? 'debug' : 'appAttestWithDeviceCheckFallback',
            debugToken: '60815B24-FEE3-495B-A7AD-6A4554DA4413'
        }
    })

    await appCheck.initializeAppCheck({
        provider: rnfbProvider,
        isTokenAutoRefreshEnabled: true
    })

    const appCheckTokenFB = await appCheck.getToken()

    const [{ isTokenValid }] = await sendTokenToApi({
        appCheckToken: appCheckTokenFB.token
    })

    if (isTokenValid) {
        console.log('Perform Action for the legal device')
    } else {
        console.log('Perform Action for illegal device')
    }
}


export default AppCheck