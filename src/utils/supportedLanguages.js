import cookies from 'js-cookie';

export const supportedLanguages = [
    {
        code:'bg',
        name:'Български',
        country_code: 'bg'
    },
    {
        code:'en',
        name:'English',
        country_code:'gb'
    },
    {
        code:'fr',
        name: 'Français',
        country_code:'fr'
    }
]

export const currentLanguageCode = cookies.get('i18next') || 'en';

/* const currentLanguage = supportedLanguages.find(l => l.code === currentLanguageCode); */
    /* const { t } = useTranslation() */

    /* useEffect(() => {
        console.log('Setting page stuff')
        document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t('app_title')
      }, [currentLanguage, t]) */