import githubIcon from '../../assets/icons/github-icon.svg';
import gmailIcon from '../../assets/icons/gmail-icon.svg';
import telegramIcon from '../../assets/icons/telegram-icon.svg';

import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <a
                href="https://github.com/iSvitka"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.FooterLink}
            >
                <img className={styles.FooterIcon} src={githubIcon} alt="github icon" />
                <span className={styles.FooterLinkText}>iSvitka</span>
            </a>
            <a
                href="https://mailto:svitka.ilya@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.FooterLink}
            >
                <img className={styles.FooterIcon} src={gmailIcon} alt="gmail icon" />
                <span className={styles.FooterLinkText}>svitka.ilya@gmail.com</span>
            </a>
            <a
                href="https://t.me/iSvitka"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.FooterLink}
            >
                <img className={styles.FooterIcon} src={telegramIcon} alt="telegram icon" />
                <span className={styles.FooterLinkText}>iSvitka</span>
            </a>
        </footer>
    )
}