import { Survey } from 'survey-react-ui';
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";

const surveyJson = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "file",
          "name": "question3"
        }
      ]
    }
  ]
};

function App() {
  const survey = new Model(surveyJson);

  return <Survey model={survey} />;
}

export default App;
