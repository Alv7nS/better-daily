'use client';
import { useState } from 'react';

export default function HabitCard({ habit }) {
  const [streak, setStreak] = useState(habit.streak);
  const [message, setMessage] = useState('');

  const handleCheckIn = async () => {
    setStreak(streak + 1);
    const res = await fetch('/api/message', {
      method: 'POST',
      body: JSON.stringify({ habit: habit.name }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold text-[#424658]">{habit.name}</h2>
      <p className="text-sm text-gray-500">Streak: {streak} days</p>
      <button
        onClick={handleCheckIn}
        className="mt-2 bg-[#FFDAC1] text-white px-3 py-1 rounded"
      >
        Check In
      </button>
      {message && <p className="mt-2 text-sm text-[#424658]">{message}</p>}
    </div>
  );
}