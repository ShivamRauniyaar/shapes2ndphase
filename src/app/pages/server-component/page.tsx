
export default function MyServerComponent() {

  const currentTime = new Date().toLocaleString();

  return (
    <div>
      <h1>Server Component Example</h1>
      <p>Current server time is: {currentTime}</p>
    </div>
  );
}
