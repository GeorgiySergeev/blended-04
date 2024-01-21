import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { addTodo, getTodos } from "store/todoSlice";


import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodos = text => {
    const todo = {
      id: nanoid(),
      text,
    };
    dispatch(addTodo(todo))
  };

  const handleSubmit = data => {
    addTodos(data);
  };

  const deleteTodo = id => {
    /*   setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id)); */
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    onClick={deleteTodo}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
