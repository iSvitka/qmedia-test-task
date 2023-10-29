import React from 'react';
import cn from 'classnames';
import questions from './data/questions.json'
import { Quiz } from './components/Quiz/Quiz';
import { Products } from './components/Products/Products';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import styles from './App.module.scss';

export const App = () => {
  const [isQuizFinished, setIsQuizFinished] = React.useState(false);
  const [isQuizClosing, setIsQuizClosing] = React.useState(false);

  const finishQuiz = React.useCallback(() => {
    if(!isQuizClosing) {
      setIsQuizClosing(true)
      setTimeout(() => {
        document.documentElement.scrollTo({top: 0})
        setIsQuizFinished(true);
      }, 250)
    }
  }, [isQuizClosing])


  return (
    <div className={styles.App}>
      <Header />
      <main  className={styles.AppMain}>
        {!isQuizFinished && 
          <div className={cn(styles.AppQuiz,
            {[styles.AppQuizClosing]: isQuizClosing})}>
            <Quiz questions={questions} finishCallback={finishQuiz}/>
          </div>
        }
        {isQuizFinished && 
          <div className={styles.AppProducts}>
            <Products />
          </div>
        }
      </main>
      <Footer />
    </div>
  );
}
