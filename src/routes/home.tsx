import { Button } from "../components/button";

export function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <h2>To Do:</h2>
      <ul>
        <li>Configure linter</li>
        <li>Improve storybook usage (variations + a11y)</li>
        <li>Create some example tests</li>
        <li>
          Document project:
          <ul>
            <li>how to create and use stories</li>
            <li>how to add routes</li>
          </ul>
        </li>
      </ul>
      <h2>Component example</h2>
      <Button
        label="This is a button"
        onClick={() => alert("You pressed the button")}
      />
    </div>
  );
}
