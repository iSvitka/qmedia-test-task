import React from "react";
import { IQuizQuestionProps } from "./Quiz-Question.typings";

import styles from './Quiz-Question.module.scss';

export const QuizQuestion = (props: IQuizQuestionProps) => {
    const { question, answers, chooseAnswerCallback } = props;

    const onChangeHandler = React.useCallback(() => {
        chooseAnswerCallback()
    }, [chooseAnswerCallback])

    return (
        <div className={styles.QuizQuestion}>
            <h2 className={styles.QuizQuestionTitle}>{question}</h2>
            <ul className={styles.QuizQuestionList}>
                {answers.map(answer => (
                    <li className={styles.QuizQuestionListItem} key={`answer_${answer}`}>
                        <input
                            type="radio"
                            name={`radio_${question}`}
                            id={`radio_${answer}`}
                            value={answer}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor={`radio_${answer}`}>
                            {answer}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}