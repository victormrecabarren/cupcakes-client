# Cupcakes Shop! - with React Native

- An app for a cupcake shop (or any shop) to display their menu and allow users to place orders

- First attempt at a front-end using React Native ~

- Currently only available for iOS testing

## Steps to get started with React Native:
# Install process:
- `brew install node`
- `brew install watchman`
- `brew tap AdoptOpenJDK/openjdk`
- `brew cask install adoptopenjdk8`
- npm install -g react-native-cli
- Download Xcode from Apple's development page
- After Xcode downloads, go ahead and make command line tools available: Open "Preferences..." and go to the Locations tab. Select your Xcode version from the "Command Line Tools" dropdown.
- Install "CocoaPods", a dependency manager for Xcode:
- `sudo gem install cocoapods`

# Creating the app
- Inside the directory you want your new project directory to appear, `react-native init <projectName>` (this may take a little while, may hang for up to 45 minutes on first time creation)

# Running app on local simulator:
- `react-native run-ios --simulator="iPhone Xs"`
- To see a list of available devices to use with the simulator flag, run `xcrun simctl list devices`

# Running app on device:
- Plug in device via USB
- Open Xcode and select "Open another project..."
- Navigate to `ios` directory within the project, select the `<projectName>.xcworkspace` file
- On right hand side, under Targets, select `<projectName>`
- Under "General" tab, go to Deployment Info heading and choose Target Device along with iOS version
- Under "Signing & Capabilities" tab, select a "Team" from the dropdown menu.
- On right hand side, under Targets, select `<projectName>Tests`
- Under "Signing & Capabilities", give the test target the same Team given to the project target
- In options for main window, Product > Destination > Device: `<your device>`
- Press the Play icon at top left of Xcode to build and run, or alternatively, `npm start` from command line
- App should begin installing on your device shortly
- Follow the official documentation troubleshooting procedures if any errors: https://facebook.github.io/react-native/docs/running-on-device

## To connect to local backend server (localhost:<port>)

- Ngrok is used to give a localhost server a secure address (`https://`) because iOS has strictly prohibited network connections to non secure url's and will block any fetch requests or ajax calls made to an `http://`
- Download `ngrok` here: https://ngrok.com/download
- After installation, move the ngrok file into primary user folder (alternatively, set up an alias for easy command line access)
- `~username/ngrok http <port>`
- A new server should start. Use the secure forwarding address (`https`) provided by ngrok. (Should look something like `https://063ce9fa.ngrok.io`)

- Use this address if using fetch requests to give the front-end access to a local back end server.

# See React Native documentation for info on styling, linking libraries, event handlers, etc: https://facebook.github.io/react-native/docs/tutorial
