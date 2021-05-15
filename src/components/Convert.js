import { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  const [translatedText, setTranslatedText] = useState(""),
    [debouncedText, setDebouncedText] = useState(translatedText);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedText(translatedText);
    }, 700);
    return () => {
      clearTimeout(timerId);
    };
  }, [translatedText]);

  useEffect(() => {
    const translateText = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "GOOGLE API KEY",
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
