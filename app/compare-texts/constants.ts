export const DEFAULT_REACT_COMPONENT_CODE = `const App = () => {
  const [count, setCount] = React.useState<number>(0);
  
  return (
    <div>
      <h3 style={{
        background: 'darkslateblue',
        color: 'white',
        padding: 8,
        borderRadius: 4
      }}>
        Counter: {count} 🧮
      </h3>
      <button
        style={{
          background: 'orange',
          color: 'white',
          padding: "8px 16px",
          borderRadius: 4,
          marginTop: 8
        }}
        onClick={() =>
          setCount(c => c + 1)
        }>
        Increment
      </button>
    </div>
  )
}

render(<App />)`;
