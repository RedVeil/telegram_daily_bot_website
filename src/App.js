import React, {useState} from 'react';
import _ from "underscore";
import styles from './App.module.css';
import {conversation} from "./text";
import {Buttons} from "./components/Buttons";
import {ChatMessage} from "./components/ChatMessage";
import {Nav} from "./components/Nav";
import {Footer} from "./components/Footer";

const App = () => {
  const [language, setLanguage] = useState(getBrowserLanguage());
  const [actions, updateActions] = useState([])
  const [noCount, addNo] = useState(0)

  function getBrowserLanguage(){
    if (navigator.language !== "de"){
      return "eng"
    }
    else{
      return "de"
    }
  };

  function changeToDe(){
    setLanguage("de")
  };

  function changeToEng(){
    setLanguage("eng")
  };

  function handleYes(){
    updateActions(actions.concat("yes"))
  };

  function handleNo(){
    updateActions(actions.concat("no"))
    addNo(noCount+1)
  };

  return (
    <div className="App">
      {Nav(changeToDe, changeToEng)}
      <div className={styles.main}>
        <div>
          <div className={styles.chatMessageContainer}>{ChatMessage(conversation[language].questions[0])}</div>
          <div className={styles.buttonsContainer}>{Buttons(language, handleYes, handleNo, 1, actions.length)}</div>
        </div>
        {actions[0] === "yes" ? <div className={styles.conversatioStep}>
                                  <div className={styles.chatMessageContainer}>
                                    <div className={styles.chatMessageContainer}>
                                      {ChatMessage(conversation[language].questions[1])}
                                    </div>
                                  </div>
                                    <div className={styles.buttonsContainer}>
                                      {Buttons(language, handleYes, handleNo, 2, actions.length)}
                                    </div>
                                </div> : ""}
        {actions[0] === "no" ? <div className={styles.conversatioStep}>
                                <div className={styles.chatMessageContainer}>
                                  {ChatMessage(conversation[language].noAnwers[0])}
                                  {ChatMessage(conversation[language].questions[1])}
                                </div>
                                <div className={styles.buttonsContainer2}>
                                  {Buttons(language, handleYes, handleNo, 2, actions.length)}
                                </div>
                              </div> : ""}

        {actions[1] === "yes" ? <div className={styles.conversatioStep}>
                                  <div className={styles.chatMessageContainer}>
                                    {ChatMessage(conversation[language].questions[2])}
                                  </div>
                                  <div className={styles.buttonsContainer}>
                                    {Buttons(language, handleYes, handleNo, 3, actions.length)}
                                  </div>
                                </div> : ""}
        {_.isEqual(actions.slice(0,2),["no","no"]) ? 
                                <div className={styles.conversatioStep}>
                                  <div className={styles.chatMessageContainer}>
                                    {ChatMessage(conversation[language].noAnwers[1])}
                                    {ChatMessage(conversation[language].questions[2])}
                                  </div>
                                  <div className={styles.buttonsContainer2}>
                                    {Buttons(language, handleYes, handleNo, 3, actions.length)}
                                  </div>
                                </div> : ""}
        {_.isEqual(actions.slice(0,2),["yes","no"]) ? 
                                <div className={styles.conversatioStep}>
                                  <div className={styles.chatMessageContainer}>
                                    {ChatMessage(conversation[language].noAnwers[0])}
                                    {ChatMessage(conversation[language].questions[2])}
                                  </div>
                                  <div className={styles.buttonsContainer2}>
                                    {Buttons(language, handleYes, handleNo, 3, actions.length)}
                                  </div>
                                </div> : ""}

        {actions[2] === "yes" ? <div className={styles.conversatioStep}>
                                  <div className={styles.chatMessageContainer}>
                                    {ChatMessage(conversation[language].questions[3])}
                                  </div>
                                  <div className={styles.buttonsContainer}>
                                    {Buttons(language, handleYes, handleNo, 4, actions.length)}
                                  </div>
                                </div> : ""}
        {_.isEqual(actions.slice(0,3),["no","yes","no"]) ? 
                                <div className={styles.conversatioStep}>
                                  <div className={styles.chatMessageContainer}>
                                    {ChatMessage(conversation[language].noAnwers[1])}
                                    {ChatMessage(conversation[language].questions[3])}
                                  </div>
                                  <div className={styles.buttonsContainer2}>
                                    {Buttons(language, handleYes, handleNo, 4, actions.length)}
                                  </div>
                                </div> : ""}

        {_.isEqual(actions.slice(0,3),["yes","yes","no"]) ? 
                                <div className={styles.conversatioStep}>
                                  <div className={styles.chatMessageContainer}>
                                    {ChatMessage(conversation[language].noAnwers[0])}
                                    {ChatMessage(conversation[language].questions[3])}
                                  </div>
                                  <div className={styles.buttonsContainer2}>
                                    {Buttons(language, handleYes, handleNo, 4, actions.length)}
                                  </div>
                                </div> : ""}

        {_.isEqual(actions.slice(0,3),["yes","no","no"]) ?
          	                    <div className={styles.conversatioStep}>
                                  <div className={styles.chatMessageContainer}>
                                    {ChatMessage(conversation[language].noAnwers[1])}
                                    {ChatMessage(conversation[language].questions[3])}
                                  </div>
                                  <div className={styles.buttonsContainer2}>
                                    {Buttons(language, handleYes, handleNo, 4, actions.length)}
                                  </div>
                                </div> : ""}
        
        {actions[3] === "yes" ? <div className={styles.conversatioStep}>
                                  <div className={styles.chatMessageContainer}>
                                    {ChatMessage(conversation[language].questions[4])}
                                    {ChatMessage(conversation[language].questions[5])}
                                  </div>
                                  <div className={styles.buttonsContainer2}>
                                    {Buttons(language, handleYes, handleNo, 5, actions.length)}
                                  </div>
                                </div> : ""}    
        
        {noCount === 3 || actions[3] === "no" ? 
                                <div className={styles.conversatioStep}>
                                  <div className={styles.chatMessageContainer}>
                                    {ChatMessage(conversation[language].noAnwers[2])}
                                  </div>
                                </div> : ""}
        {actions[4] === "yes" ? <div className={styles.conversatioStep}>
                                  <div className={styles.chatMessageContainer}>
                                    {ChatMessage(conversation[language].questions[6])}
                                    {ChatMessage(conversation[language].questions[7])}
                                    {ChatMessage(conversation[language].questions[8])}
                                  </div>
                                </div>: ""}
        {actions[4] === "no" ?  <div className={styles.conversatioStep}>
                                  <div className={styles.chatMessageContainer}>
                                    {ChatMessage(conversation[language].noAnwers[3])}
                                  </div>
                                </div>: ""}
      </div>
      <Footer/>
    </div>
  );
}

export default App;