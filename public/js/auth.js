const clerkFrontendApi = `pk_test_c3RpcnJpbmctYmxvd2Zpc2gtNzMuY2xlcmsuYWNjb3VudHMuZGV2JA`
const frontendApi = 'stirring-blowfish-73.clerk.accounts.dev'
const version = '@latest'
const script = document.createElement('script')
script.setAttribute('data-clerk-frontend-api', frontendApi)
script.setAttribute('data-clerk-publishable-key', clerkFrontendApi)
script.async = true
script.src = `https://${frontendApi}/npm/@clerk/clerk-js${version}/dist/clerk.browser.js`

// Adds listener to initialize ClerkJS after it's loaded
script.addEventListener('load', async function () {
    const clerk = window.Clerk
    await clerk.load({})

    const loginBtn = document.getElementById('login-btn')
    const signUpBtn = document.getElementById('signup-btn')

    // clerk.mountSignIn(loginDiv)
    loginBtn.addEventListener('click', () => window.Clerk.openSignIn())
    signUpBtn.addEventListener('click', () => window.Clerk.openSignUp())
})
document.body.appendChild(script)
