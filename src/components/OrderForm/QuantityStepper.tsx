type Props = {
  value: number;
  onChange: (quantity: number) => void;
  disabled?: boolean;
  label: string;
};

export default function QuantityStepper({ value, onChange, disabled = false, label }: Props) {
  const quantity = Number.isSafeInteger(value) && value > 0 ? value : 1;

  return (
    <div className="flex items-center rounded-lg border bg-white">
      <button
        type="button"
        aria-label={`Decrease ${label} quantity`}
        disabled={disabled || quantity <= 1}
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="h-9 w-9 text-lg disabled:cursor-not-allowed disabled:opacity-40"
      >
        −
      </button>
      <span className="min-w-9 text-center text-sm" aria-live="polite">{quantity}</span>
      <button
        type="button"
        aria-label={`Increase ${label} quantity`}
        disabled={disabled}
        onClick={() => onChange(quantity + 1)}
        className="h-9 w-9 text-lg disabled:cursor-not-allowed disabled:opacity-40"
      >
        +
      </button>
    </div>
  );
}
