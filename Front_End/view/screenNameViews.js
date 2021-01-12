const view = {
    currentScreen: null
}
view.showComponents = async function(screenName) {
    view.currentScreen = screenName

    switch (screenName) {

        case 'home':
            {
                let myWeb = document.getElementById('my-web')

                myWeb.innerHTML = components.header

                break;
            }

        case 'admin':
            {




            }

    }
}