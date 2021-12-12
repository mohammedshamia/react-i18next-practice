import './App.css';
import {useState} from "react";
import {useTranslation} from "react-i18next"
import changeLanguage from './Utils/changeLanguage'

function App() {
    const {t, i18n} = useTranslation()

  const handleChangeLanguage=()=>{
      changeLanguage(i18n.language==='ar'?"en":'ar' ,i18n)
  }
  return (
      <div className="App">
        <div className={i18n.language=== 'ar'? "ml":"mr"}>{t('Gaza')}</div>
        <div>{t('Hebro')} </div>
        <div>{t('Jeruslem')} </div>
        <div>{t('Jaffa')} </div>

        <button onClick={handleChangeLanguage}>{t('language')}</button>
      </div>
  );
}

export default App;
