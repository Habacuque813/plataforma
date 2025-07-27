"use client";

import React, { useState, useEffect } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  format,
  isSameMonth,
  parseISO,
} from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface GoogleEvent {
  id: string;
  summary: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
}

interface GoogleCalendarProps {
  apiKey: string;
  calendarId: string;
}

export default function GoogleCalendar({
  apiKey,
  calendarId,
}: GoogleCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState<GoogleEvent[]>([]);

  // Puxa eventos do Google Calendar sempre que muda o mês
  useEffect(() => {
    const timeMin = encodeURIComponent(
      startOfMonth(currentMonth).toISOString(),
    );
    const timeMax = encodeURIComponent(endOfMonth(currentMonth).toISOString());
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.items || []);
      })
      .catch(console.error);
  }, [apiKey, calendarId, currentMonth]);

  // Gera as semanas do mês
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows: Date[][] = [];
  let day = startDate;
  while (day <= endDate) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(day);
      day = addDays(day, 1);
    }
    rows.push(week);
  }

  function prevMonth() {
    setCurrentMonth(subMonths(currentMonth, 1));
  }
  function nextMonth() {
    setCurrentMonth(addMonths(currentMonth, 1));
  }

  return (
    <div className="bg-white shadow rounded-lg p-4">
      {/* Cabeçalho com navegação de mês */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-1 hover:bg-gray-200 rounded transition"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
        </button>
        <h3 className="text-lg font-semibold text-gray-800">
          {format(currentMonth, "MMMM yyyy")}
        </h3>
        <button
          onClick={nextMonth}
          className="p-1 hover:bg-gray-200 rounded transition"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Dias da semana */}
      <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Grid de dias */}
      <div className="grid grid-cols-7 gap-1">
        {rows.map((week, wi) =>
          week.map((dayDate) => {
            const formatted = format(dayDate, "d");
            const inMonth = isSameMonth(dayDate, monthStart);

            // Filtra eventos que começam nesse dia
            const dayEvents = events.filter((ev) => {
              const dateStr = ev.start.dateTime || ev.start.date;
              if (!dateStr) return false;
              const evDate = parseISO(dateStr);
              return (
                evDate.getDate() === dayDate.getDate() &&
                isSameMonth(evDate, monthStart)
              );
            });

            return (
              <div
                key={`${wi}-${formatted}`}
                className={`
                        p-2 h-24 border rounded-lg flex flex-col
                        transition duration-200
                        ${inMonth ? "bg-white hover:bg-blue-50 cursor-pointer" : "bg-gray-100 text-gray-400"}
                        hover:shadow-md
                        `}
              >
                <div className="text-sm font-medium">{formatted}</div>
                <div className="flex-1 overflow-hidden mt-1 text-xs">
                  {dayEvents.slice(0, 2).map((ev) => (
                    <div
                      key={ev.id}
                      className="mb-1 truncate bg-blue-200 text-blue-800 px-1 rounded"
                      title={ev.summary}
                    >
                      {ev.summary}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-blue-600">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
}
