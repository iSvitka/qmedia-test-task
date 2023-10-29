import React from "react";
import { IQuizPaginationCircleProps } from "./Quiz-Pagination-Circle.typings";
import cn from 'classnames';

import styles from './Quiz-Pagination-Circle.module.scss';

export const QuizPaginationCircle = React.memo((props: IQuizPaginationCircleProps) => {
    const { index, activeIndex } = props;

    return (
        <div
            className={cn(
                styles.QuizPaginationCircle,
                {[styles.QuizPaginationCircleActive]: activeIndex === index}
            )}
        />
    )
})