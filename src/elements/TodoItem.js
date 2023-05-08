export default function TodoItem({ todo, deleteTodo }) {
  return (
    <li>
      <span>{todo.content}</span>
      <button>Valider</button>
      <button>Modifier</button>
      <button onClick={deleteTodo}>
        Supprimer
      </button>
    </li>
  );
}