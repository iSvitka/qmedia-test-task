import React from "react"
import { IQuizPaginationProps } from "./Quiz-Pagination.typings"
import { QuizPaginationCircle } from "./-Circle/Quiz-Pagination-Circle";

import styles from './Quiz-Pagination.module.scss';

export const QuizPagination = (props: IQuizPaginationProps) => {
    const { amount, currentQuestion } = props;

    const renderCircles = () => {
        const amountArray = new Array<number>(amount).fill(0);
        return amountArray.map((_, index) => (
            <QuizPaginationCircle
                index={index}
                activeIndex={currentQuestion}
                key={`circle_${index}`}
            />
        ))
    }

    return (
        <div className={styles.QuizPagination}>
            <div className={styles.QuizPaginationCirclesWrapper}>
                {renderCircles()}
            </div>
            <span className={styles.QuizPaginationText}>
                {`Вопрос ${currentQuestion + 1} из ${amount}`}
            </span>
        </div>
    )
}