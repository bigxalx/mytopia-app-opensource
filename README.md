# Mytopia iOS and Android Source Code

<img src="assets/images/icon.png" alt="Mytopia App Icon" width="120">

**Mytopia is a companion app for Dr. Sophie Oldenstein and Manuel Kressin's dystopian sci-fi theatre series, [√My](https://theater-altenburg-gera.de/stuecke-konzerte/my-episode-i-willkommen-in-mytopia-1480/), performed in June and July 2023 at [Theater Altenburg-Gera](https://theater-altenburg-gera.de).**

The app was designed and developed by [Armin Luschin](https://arminluschin.com) and published by [Nils Corte](https://nils-corte.de)

**Mytopia is available for free on the [App Store](https://apps.apple.com/de/app/mytopia/id6447253951) and [Google Play Store](https://play.google.com/store/apps/details?id=net.minuseins.mytopia).**

## Overview

The app's purpose is to immerse the audience deeper into the Mytopia world and storyline by enabling interactive, gamified experiences.

### Architecture

- This repo contains the source code for the iOS and Android apps written in TypeScript using React Native and Expo.

- The project uses [Firebase](http://firebase.google.com) to authenticate users, store user data, and manage and deliver push notifications. The source code for this project's Firebase Cloud Functions is available [here](https://github.com/bigxalx/mytopia-firebase-opensource).

- The project uses [Contentful](http://contentful.com) as a CMS where all content and images are stored and served.

- The project uses Github Actions and EAS Build Services to provide a continuous deployment pipeline that generates native iOS and Android builds and automatically submits them to their appropriate store.

## Setup

1.  Clone the repo
2.  Run

        npm install

3.  Set up [Contentful](http://contentful.com) with the schema you can infer from [here](./%40types/generated/contentful.d.ts).
4.  Create a .env file at the root of the project and provide the following environment variables:

        CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
        CONTENTFUL_SPACE_ID
        CONTENTFUL_ENVIRONMENT
        CONTENTFUL_API_KEY

5.  Setup a Firebase project, then create and download your [configuration files](https://support.google.com/firebase/answer/7015592?hl=en#zippy=%2Cin-this-article) and move them into the firebase-config folder.
6.  Update the redacted info in [app.json](./app.json) with your details.
7.  Now you can create your first build with EAS or locally by running

        npx expo prebuild

    You only need to do this when you create a new native version, please refer to the [Expo docs](https://docs.expo.dev/develop/development-builds/development-workflows/#build-locally-with-android-studio-and-xcode).

    Builds iOS app locally (requires a Mac):

        npx expo run:ios

    Builds Andriod app locally:

        npx expo run:android

**Please note:**
In production, we us Github Actions and the [EAS CLI](https://docs.expo.dev/build/building-on-ci/) to automatically build and submit new releases. In this repo, because they contain sensitive information like credentials,

- eas.json has been removed. Create your own and configure according to [EAS docs.](https://docs.expo.dev/build/eas-json/).
- googleServiceAccountKey.json has been removed. Create your own according to [this doc](https://github.com/expo/fyi/blob/main/creating-google-service-account.md).
- The P8 Auth Key has been removed. Create your own according to [this doc](https://github.com/expo/fyi/blob/main/creating-asc-api-key.md).
- The Firebase configuration files inside firebase-config have been removed.

For the same reason, the ios and android folders, containing the native project files, have been removed.

## Feedback

I appreciate your feedback. Although I do not plan to maintain this repo, feel free to create an issue to ask questions or email me: [mytopia@arminluschin.com](mailto:mytopia@arminluschin.com)

## License

The code in this repo is [licensed as Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](LICENSE.md), which means you are free to:

- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

Under the following terms:

1. Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
2. NonCommercial — You may not use the material for commercial purposes.
3. ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
