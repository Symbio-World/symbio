import { ProviderTypes, TranslatorConfiguration, TranslatorFactory } from 'react-native-power-translator';
import { GOOGLE_TRANSLATE_API_KEY } from 'react-native-dotenv'

const GOOGLE_TRANSLATE_DEFAULT_LANG = 'en'
TranslatorConfiguration.setConfig(ProviderTypes.Google, GOOGLE_TRANSLATE_API_KEY, GOOGLE_TRANSLATE_DEFAULT_LANG)
export const translator = TranslatorFactory.createTranslator();