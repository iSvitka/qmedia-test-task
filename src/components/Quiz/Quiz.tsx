import React from "react";
import cn from 'classnames';
import { IQuizProps } from "./Quiz.typings";
import { QuizPagination } from "./-Pagination/Quiz-Pagination";
import { QuizQuestion } from "./-Question/Quiz-Question";

import styles from './Quiz.module.scss';

export const Quiz = (props: IQuizProps) => {
    const { questions, finishCallback } = props;

    const DEFAULT_QUESTION_STATE = React.useMemo(() => {
        return Object.fromEntries(questions.map((_, index) => [index, false]));
    }, [questions])

    const questionOverlay = React.useRef<HTMLDivElement>(null);
    const [overlayWidth, setOverlayWidth] = React.useState(0);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [completedQuestions, setCompletedQuestions] = React.useState(DEFAULT_QUESTION_STATE)

    const buttonNextOnClickHandler = React.useCallback(() => {
        if(completedQuestions[currentQuestion]) setCurrentQuestion(prev => prev + 1);
    }, [completedQuestions, currentQuestion])

    const buttonBackOnClickHandler = React.useCallback(() => {
        setCurrentQuestion(prev => prev - 1);
    }, []);

    const buttonFinishOnClickHandler = React.useCallback(() => {
        if(completedQuestions[currentQuestion]) finishCallback()
    }, [completedQuestions, currentQuestion, finishCallback])

    const wrapperStyles = React.useMemo(() => {
        return {
            transform: `translateX(${0 - (overlayWidth * currentQuestion)}px)`
        }
    }, [currentQuestion, overlayWidth])

    React.useEffect(() => {
        const onResizeFunc = () => {
            setOverlayWidth(questionOverlay.current?.getBoundingClientRect().width ?? 0)
        }
        onResizeFunc();
        window.addEventListener("resize", onResizeFunc)

        return () => {
            window.removeEventListener("resize", onResizeFunc)
        }
    }, [])


    return (
        <section className={styles.Quiz}>
            <div className={styles.QuizTitleWrapper}>
                <h1 className={styles.QuizTitle}>
                    Онлайн-подбор средств для лица
                </h1>
                <p className={styles.QuizText}>Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов</p>
            </div>
            <div className={styles.QuizContent}>
                <div className={styles.QuizQuestionsContent}>
                    <QuizPagination amount={questions.length} currentQuestion={currentQuestion} />
                    <div className={styles.QuizQuestionsOverlay} ref={questionOverlay}>
                        <div
                            className={styles.QuizQuestionsWrapper}
                            style={wrapperStyles}
                        >
                            {questions.map((question, index) => (
                                <QuizQuestion
                                    question={question.question}
                                    answers={question.answers}
                                    chooseAnswerCallback={() => {
                                        setCompletedQuestions(prev => {
                                            return {
                                                ...prev,
                                                [index]: true,
                                            }
                                        })
                                    }}
                                    key={`question_${question.question}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.QuizButtonsWrapper}>
                    {currentQuestion !== 0 &&
                        <button
                            className={cn(styles.QuizButton, styles.QuizButtonBack)}
                            type="button"
                            onClick={buttonBackOnClickHandler}
                        >
                            Назад
                        </button>
                    }
                    {currentQuestion !== questions.length - 1 &&
                        <button
                            className={cn(styles.QuizButton,
                                styles.QuizButtonNext,
                                {[styles.QuizButtonDisabled]: !completedQuestions[currentQuestion]})}
                            type="button"
                            onClick={buttonNextOnClickHandler}
                        >
                            Дальше
                        </button>
                    }
                    {currentQuestion === questions.length - 1 &&
                        <button
                            className={cn(styles.QuizButton,
                                styles.QuizButtonFinish,
                                {[styles.QuizButtonDisabled]: !completedQuestions[currentQuestion]})}
                            type="button"
                            onClick={buttonFinishOnClickHandler}
                        >
                            Узнать результаты
                        </button>
                    }
                </div>
            </div>
        </section>
    )
};