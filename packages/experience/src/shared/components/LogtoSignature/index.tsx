import { Theme } from '@logto/schemas';

import LogtoLogtoDark from '@/shared/assets/icons/logto-logo-dark.svg?react';
import LogtoLogoLight from '@/shared/assets/icons/logto-logo-light.svg?react';
import LogtoLogoShadow from '@/shared/assets/icons/logto-logo-shadow.svg?react';

import styles from './index.module.scss';

const logtoUrl = `https://logto.io/?${new URLSearchParams({
  utm_source: 'sign_in',
  utm_medium: 'powered_by',
}).toString()}`;

type Props = {
  readonly className?: string;
  readonly theme: Theme;
};

const LogtoSignature = ({ className, theme }: Props) => {
  const LogtoLogo = theme === Theme.Light ? LogtoLogoLight : LogtoLogtoDark;


  return (
    <div className={className} data-logto-signature-container="secured">
      <a
        aria-label="Powered By Logto"
        className={styles.signature}
        data-logto-signature="secured"
        href={logtoUrl.toString()}
        rel="noopener"
        target="_blank"
      >
        <span data-logto-signature-text className={styles.text}>
          Powered by
        </span>
        <LogtoLogoShadow data-logto-signature-icon="static" className={styles.staticIcon} />
        <LogtoLogo data-logto-signature-icon="highlight" className={styles.highlightIcon} />
      </a>
    </div>
  );
};

export default LogtoSignature;
