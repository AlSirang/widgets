import { useEffect, useState } from "react";
import axios from "axios";

const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Convert = ({ text, language }) => {
  const [translatedText, setTranslatedText] = useState(""),
    [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 700);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translateText = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: GOOGLE_KEY,
          },
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };
    translateText();
  }, [debouncedText, language]);
  return <h2 className="ui header">{translatedText}</h2>;
};
export default Convert;
