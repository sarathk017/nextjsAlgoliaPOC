export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return {
    props: {
      todos: data,
    },
  };
}

export default function Test({ todos }: any) {
  return (
    <div>
      {todos?.map((todo: any) => (
        <div key={todo.id}>
          {todo.id}: {todo.title}
        </div>
      ))}
    </div>
  );
}
