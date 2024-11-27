import { useState, useEffect } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitchFill } from "react-icons/pi";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  // Handle toggling the switch
  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  // Set the background color based on the switch state
  const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "#2ecc71" };

  // Update the background color of the body when the switch is toggled
  useEffect(() => {
    document.body.style.backgroundColor = isOn ? "#303234" : "#ffebcd"; // Light blue and beige for demonstration
  }, [isOn]);

  return (
    <>
      <h1 style={{ color: "#000", textAlign: "center" }}>
        Toggle Switch{" "}
        <IoIosSwitch style={{ color: "red", textAlign: "center" }} />
        <PiUserSwitchFill />
      </h1>
      <div
        className="toggle-switch"
        style={toggleBGColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};
