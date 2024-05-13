interface ButtonProps {
  label: string;
}
const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <>
      <button
        type="submit"
        className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
      >
        {label}
      </button>
    </>
  );
};

export default Button;
