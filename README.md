# Global Tours & Tickets Case Mobile November 2023

#### **Hello everyone** 👋
- This document provides information about the development and evaluation of the sample application.

- As part of the testing, we expect you to prepare the sample application (**App Preview**) at the bottom of the document.

- The application must be developed using **Typescript**. It should work on **Android** and **Ios** platforms. It should include all the features in the **App Preview** section.
    - Navigation elements (Tabbar, Drawer etc.)
    - Form validations
    - Theme support
    - Continuing the session (If logged in, do not show the login screen.)
    - State storage (If there is added data, store it.)
    - Map operations

- After preparing your application, you can send us an e-mail in the format specified in the **Contact** field.

**Note:** If you do not own a Mac computer to develop on the iOS platform, please inform us in the notes section of the e-mail.

Thanks for your time. **Happy coding.** 🎈<br/>
Tolgahan Çelik<br/>

## Getting started
1. Fork this project.<br/>
2. Clone the forked project to your computer..<br/>
   ```bash
   git clone https://github.com/YOUR_USERNAME/GtCaseMobileNov2023.git
   ```

3. Go to the root directory of the project.<br/>
   ```bash
   cd YOUR_PATH/GtCaseMobileNov2023
   ```

4. Install project dependencies.<br/>
   ```bash
   npm install
   ```

5. Setting environment variables. Create **.env** file in the project's main directory. Fill this file according to the **.env.example** file.<br/>
   ```bash
   touch .env
   open .env
   ```

6. **[For Mac users only]** Install pods.<br/>
   ```bash
   cd ios
   pod install
   ```


## Mandatory extra steps

### Things to consider when creating a Google Maps API key.
Google Maps APIs will be used in the sample application. You need to generate api keys for Android and Ios. For your safety, pay attention to the following items.<br/>

- You need to create a Google payment account. (It is free until a certain request.)
- When creating your API key, do not forget to add application filters and API filters to be used.
- Store the API keys in the .env file.

### Completion of integrations.
Some of the packages we added as dependencies to the project require installation. Complete the installation of these packages by reviewing their documentation.<br/>
- **Note:** The **react-native-config** package is already configured to set environment variables. You can skip this package.<br/>
- **Note:** Use your api keys with **react-native-config**. You can learn how to do this from the package documentation.<br/>


## What needs to be done?
- Navigation configuration with **React Navigation**.
- Theme configuration with **React Navigation**.
- Global state configuration with **Redux**.
- Form operations with **Yup** and **Formik**.
- Map operations with **React Native Map**.


## What will be evaluated?
You must develop the project using **TYPESCRIPT**.<br/>

- Code quality.
- Project structure.
- Typescript usages.
- Package installations.
- Package usages. (Navigation, Redux, hooks usage etc.)

## Contact
Please use this format when emailing us.<br/>

- **Mail:** toursandticketsparis@gmail.com
- **Title:** GtCaseMobileNov2023 - Name Surname
- **Description:**
    - **Project Repository Url:**
    - **Note:**

## App preview
<table style="width: 100%">
  <tr>
    <th style="width: 33%">01-Login</th>
    <th style="width: 33%">02-App</th>
    <th style="width: 33%">03-Create Location</th>
  </tr>
  <tr>
    <td style="text-align: center">
        <video src="https://github.com/global-tour-rd/GtCaseMobileNov2023/assets/150152135/ae6d8e13-9d06-4cd0-ba6e-b5e2faef5b64"></video>
    </td>
    <td style="text-align: center">
        <video src="https://github.com/global-tour-rd/GtCaseMobileNov2023/assets/150152135/42bb0a90-aa32-49ac-96dd-5d3c0c7b1511"></video>
    </td>
    <td style="text-align: center">
        <video src="https://github.com/global-tour-rd/GtCaseMobileNov2023/assets/150152135/35605132-ad09-4af7-a815-decf395344ba"></video>
    </td>
  </tr>
</table>

<table style="width: 100%">
  <tr>
    <th style="width: 33%">04-Delete Location</th>
    <th style="width: 33%">05-Update Location</th>
    <th style="width: 33%">06-Logout</th>
  </tr>
  <tr>
    <td style="text-align: center">
        <video src="https://github.com/global-tour-rd/GtCaseMobileNov2023/assets/150152135/742adf91-8419-45ff-b64b-a281bb6d52ac"></video>
    </td>
    <td style="text-align: center">
        <video src="https://github.com/global-tour-rd/GtCaseMobileNov2023/assets/150152135/61afccd7-3821-4d45-af09-e9309e2bb822"></video>
    </td>
    <td style="text-align: center">
        <video src="https://github.com/global-tour-rd/GtCaseMobileNov2023/assets/150152135/98822e90-9b1e-4bd5-b110-a8cf3630dbcc"></video>
    </td>
  </tr>
</table>
# GtCaseMobileNov2023
