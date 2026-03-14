import { Link } from 'react-router-dom';
import './IEDCButton.css';

/**
 * IEDCButton — The single reusable CTA button for the entire site.
 *
 * Props:
 *  children     — button label / content
 *  to           — if set, renders as a <Link> (react-router internal route)
 *  href         — if set, renders as an <a> tag (external link)
 *  onClick      — click handler (when used as a button)
 *  variant      — 'primary' (default) | 'outline' | 'ghost'
 *  size         — 'sm' | 'md' (default) | 'lg'
 *  icon         — optional React element shown after the label
 *  iconLeft     — optional React element shown before the label
 *  className    — extra CSS class names
 *  fullWidth    — if true, stretches to 100% width
 *  disabled     — disables the button
 *  type         — button type ('button' | 'submit' | 'reset')
 */
const IEDCButton = ({
    children,
    to,
    href,
    onClick,
    variant = 'primary',
    size = 'md',
    icon,
    iconLeft,
    className = '',
    fullWidth = false,
    disabled = false,
    type = 'button',
    ...rest
}) => {
    const classes = [
        'iedc-btn',
        `iedc-btn--${variant}`,
        `iedc-btn--${size}`,
        fullWidth ? 'iedc-btn--full' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const inner = (
        <>
            {iconLeft && <span className="iedc-btn__icon iedc-btn__icon--left">{iconLeft}</span>}
            <span className="iedc-btn__label">{children}</span>
            {icon && <span className="iedc-btn__icon iedc-btn__icon--right">{icon}</span>}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={classes} {...rest}>
                {inner}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
                {inner}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {inner}
        </button>
    );
};

export default IEDCButton;
