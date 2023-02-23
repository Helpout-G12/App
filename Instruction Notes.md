USE SafeAreaView from @react-navigation/native or react-native-safe-area-context.
DO NOT USE SafeAreaView from any other library

USE "overrides" in npm package.json to override vulnaranble dependencies.
EDIT THE pacckage-lock.json file after first npm install to update the version of the vulnerable dependencies.

APP NAVIGATION:

    The App uses a 2 tier Navigation system.

    1. The first tier is the Root Navigation which is the main navigation of the app.

        It Includes the Not-Found Screen, the Modals, and the second tier navigator.


    2. The second tier is the Main App Navigation which is handled by the bottom tab navigator.

        It includes most of the screens of the app.

