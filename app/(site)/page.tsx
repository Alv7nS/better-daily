'use client';
import { useState } from 'react';
import AddHabitForm from '@/components/AddHabitForm';
import HabitCard from '@/components/HabitCard';

export default function Dashboard() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  return (
    <main className="bg-[#F9F6F2] min-h-screen p-4">
      <h1 className="text-2xl font-bold text-[#424658] mb-4">Better Daily</h1>
      <AddHabitForm onAdd={addHabit} />
      <div className="mt-4 space-y-4">
        {habits.map((habit, index) => (
          <HabitCard key={index} habit={habit} />
        ))}
      </div>
    </main>
  );
}