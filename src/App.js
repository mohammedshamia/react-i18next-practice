import './App.css';
import {useState} from "react";

const lang={
    ar:{
        Gaza:"غزة",
        Hebro:"الخليل",
        Jeruslem:"القدس",
        Jaffa:"يافا",
        language:"EN"
    },
    en:{
        Gaza:"Gaza",
        Hebro:"Hebro",
        Jeruslem:"Jeruslem",
        Jaffa:"Jaffa",
        language:"AR"
    }
}

function App() {
    const [language, setLanguage]=useState('ar')

    const handleChangeLanguage=()=>{
        setLanguage(prevState=>{
            if (prevState === 'ar')
                return "en"
            return 'ar'
        })
    }
  return (
    <div className="App">
      <div className={language=== 'ar'? "ml":"mr"}>{lang[language]['Gaza']}</div>
      <div>{lang[language]['Hebro']} </div>
      <div>{lang[language]['Jeruslem']} </div>
      <div>{lang[language]['Jaffa']} </div>

        <button onClick={handleChangeLanguage}>{lang[language]['language']}</button>
    </div>
  );
}

export default App;
