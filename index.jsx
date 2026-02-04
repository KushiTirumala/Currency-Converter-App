export function CurrencyConverter() {
  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
  };

  const [amount, setAmount] = React.useState(10);
  const [fromCurrency, setFromCurrency] = React.useState("USD");
  const [toCurrency, setToCurrency] = React.useState("EUR");

  // ✅ Memoized FROM-currency calculation
  const baseAmount = React.useMemo(() => {
    return amount / rates[fromCurrency];
  }, [amount, fromCurrency]);

  // ❌ NOT memoized intentionally
  const convertedAmount = (baseAmount * rates[toCurrency]).toFixed(2);

  return (
    <div className="converter">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>

      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>

      <p>{convertedAmount} {toCurrency}</p>
    </div>
  );
}
