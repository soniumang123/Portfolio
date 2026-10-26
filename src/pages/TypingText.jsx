import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Node.js Developer",
  "React.js Developer",
];
const TypingText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = deleting ? 45 : 100;

    if (!deleting && text === currentRole) {
      delay = 1500;
    } else if (deleting && text === "") {
      delay = 400;
    }
    const timer = setTimeout(() => {
      if (!deleting && text === currentRole) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (deleting) {
        setText(currentRole.substring(0, text.length - 1));
      } else {
        setText(currentRole.substring(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <div>
      {text}
      <span className="text-blue-500 animate-pulse">|</span>
    </div>
  );
};

export default TypingText;
