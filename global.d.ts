import 'react-native-config';
declare module 'react-native-config' {
  export interface NativeConfig {
    MAP_ANDROID_API_KEY?: string;
    MAP_IOS_API_KEY?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
