import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as { text: string }).text;
    const newTodo = new Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Todo has been added", createdTodo: newTodo });
}

export const getTodos: RequestHandler = (req, res, next) => {
    res.status(200).json({ todos: TODOS });
}

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const { id } = req.params;
    const text = (req.body as { text: string }).text;
    const todoIndex = TODOS.findIndex(item => item.id === id);

    if (todoIndex < 0) throw new Error("couldn't find todo!");
    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, text);

    res.status(202).json({ message: 'Todo has been updated', updateTodo: TODOS[todoIndex] });
}

export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const { id } = req.params;
    const todoIndex = TODOS.findIndex(item => item.id === id);

    if (todoIndex < 0) throw new Error("couldn't find todo!");
    TODOS.splice(todoIndex, 1);
    res.status(203).json({message: 'Todo has been removed'});
}