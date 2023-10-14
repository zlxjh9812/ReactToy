// import propType from "prop-type";
import styles from "./Button.module.css";
function Button({text}){
    return (
    <div>
        <button
        className={styles.btn}
        >{text}</button>
    </div>
    );
}
// Button.Prototype = {
//     text : propType.String.isRequired,
// }
export default Button;