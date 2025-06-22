// src/components/Button.tsx

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
