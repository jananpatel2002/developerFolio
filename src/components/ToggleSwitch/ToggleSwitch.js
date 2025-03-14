import React, {useState, useContext, useRef} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const [canAnimate, setCanAnimate] = useState(true);
  const styleContext = useContext(StyleContext);
  const timeoutRef = useRef(null);

  const handleChange = () => {
    styleContext.changeTheme();
    setChecked(!isChecked);
    setCanAnimate(false);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set new timeout and store the reference
    timeoutRef.current = setTimeout(() => {
      setCanAnimate(true);
      timeoutRef.current = null;
    }, 2000);
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <label className={`switch ${canAnimate ? 'can-animate' : ''}`}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={handleChange}
      />
      <span className="slider round">
        <span className="emoji">
          {isDark ? emoji("🌜") : emoji("☀️")}
        </span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
