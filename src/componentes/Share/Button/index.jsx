import styles from './button.module.css';

const Button = ({ children, type, action, variant }) => {
  return (
    <button
    type={type || 'button'}
    className={styles[variant || 'basic']}
    onClick={() => {
      action && action();
    }}
    >{children}</button>
  );
};

export default Button;
