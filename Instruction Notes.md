HOW TO GIT:

    Clone the repo to your local machine.

    DO NOT WORK ON THE MASTER BRANCH. IT IS PROTECTED.

    Create a new branch for your work.

        use `git checkout -b <branch-name>` to create a new branch and switch to it.

    Commit your work to your branch.

        use `git add .` to add all files to the staging area.
        use `git commit -m "<commit-message>"` to commit your work.
    
    Push your branch to the remote repo.
    
        use `git push origin <branch-name>` to push your branch to the remote repo.
    
    Create a pull request to merge your branch to the master branch.
    
        go to the repo on github and click on the "Pull Requests" tab.
        click on the "New Pull Request" button.
        select your branch as the "compare" branch and the master branch as the "base" branch.
        click on the "Create Pull Request" button.
        wait for me to review your code and merge it to the master branch.
    
    DO NOT PUSH TO THE MASTER BRANCH. IT IS PROTECTED.


USE SafeAreaView from @react-navigation/native or react-native-safe-area-context.
DO NOT USE SafeAreaView from any other library

USE "overrides" in npm package.json to override vulnaranble dependencies.
EDIT THE pacckage-lock.json file after first npm install to update the version of the vulnerable dependencies.

USE UI ELEMENTS FROM components folder or native-base ui library.

APP NAVIGATION:

    The App uses a 2 tier Navigation system.

    1. The first tier is the Root Navigation which is the main navigation of the app.

        It Includes the Not-Found Screen, the Modals, and the second tier navigator.


    2. The second tier is the Main App Navigation which is handled by the bottom tab navigator.

        It includes most of the screens of the app.

SAFE AREA VIEW:
    
        The App uses SafeAreaView from react-native-safe-area-context to handle the safe area of the device.
        The MAIN APP is wrapped in a SafeAreaProvider from react-native-safe-area-context.
        All other components are wrapped in a SafeAreaView from react-native-safe-area-context,
        which consumes the SafeAreaProvider from the main app.