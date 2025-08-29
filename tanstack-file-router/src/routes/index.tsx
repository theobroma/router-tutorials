import { createFileRoute } from '@tanstack/react-router';
import '../App.css';

export const Route = createFileRoute('/')({
    component: App,
});

function App() {
    return (
        <div className="p-2">
            <h3>Welcome Home!</h3>
        </div>
    );
}
