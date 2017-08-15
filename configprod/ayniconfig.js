window.ayniConfiguration = {
     authsettings : {
            authority: 'http://localhost:7778/core',
            client_id: 'ayni-spa-client',
            popup_redirect_uri: 'http://localhost:3000/popup.html',
            silent_redirect_uri: 'http://localhost:3000/silentrenew.html',
            post_logout_redirect_uri: 'http://localhost:3000/welcome.html',
            response_type: 'id_token token',
            scope: 'openid profile api',
            accessTokenExpiringNotificationTime: 4,
            automaticSilentRenew: true,
            filterProtocolClaims: true,
            popupWindowFeatures: 'location=no,toolbar=no,width=800,height=800,left=100,top=100'
        },
    apiService:{
        apiUrl: 'http://127.0.0.1:5000/',
        useMockData: false
    }
}