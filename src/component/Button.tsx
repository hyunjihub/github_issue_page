interface ButtonProps {
  bgColor: string;
  fontColor: string;
}

function Button({ bgColor, fontColor }: ButtonProps) {
  return (
    <button
      className="py-1.5 px-4 text-sm font-semibold rounded"
      style={{ backgroundColor: bgColor, color: fontColor }}
    >
      New Issue
    </button>
  );
}

export default Button;
