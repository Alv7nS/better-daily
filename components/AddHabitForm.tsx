'use client';
import { useState } from 'react';

export default function AddHabitForm({ onAdd }) {
  const [habit, setHabit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.trim() === '') return;
    onAdd({ name: habit, streak: 0 });
    setHabit('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter a new habit"
        className="flex-1 p-2 rounded border border-gray-300"
      />
      <button type="submit" className="bg-[#B5EAD7] text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}