# Auto TOTP CAS Login
[![N|Solid](https://secure.gravatar.com/avatar/7273c58dc017eec83667b50742ff6368?s=80)](https://www.linkedin.com/in/amitasviper/)

A chrome extension which generates the Time based one time password from the auth token and injects that in the login form and submits. This is a chrome extension which can be installed from the source.

### Installation
1. Clone the current project to your local machine:
    ```sh
    $ git clone https://github.com/amitasviper/Auto-CAS-Login-ChromeExtension
    ```
2. Copy file manifest-copy.json into manifest.json and specify the url in the manifest.json file where the extension should try auto login
     ```sh
    $ cp manifest-copy.json   manifest.json
    ```
3. Open `chrome://extensions/` in your chrome browser:
4. Click on `Load Unpacked extension` and give the local path of the repository you cloned in step 1.
5. A small extenion icon will appear. Click on that icon and set your username and auth token and save the settings.
6.  Open the website where you want to autologin.