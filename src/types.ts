// src/types.ts

// Define interfaces for the Chronos time machine application

/**
 * Represents a period of time with a start and end.
 */
interface TimePeriod {
    start: Date;
    end: Date;
}

/**
 * Represents different disciplines that may utilize the time machine.
 */
interface DisciplineType {
    name: string;
    description?: string;
}

/**
 * Represents a state of the time machine, including current status and location.
 */
interface TemporalState {
    currentPeriod: TimePeriod;
    activeDiscipline: DisciplineType;
    isInUse: boolean;
}

/**
 * Related types that might be useful in the application.
 */
type TimelineEvent = {
    title: string;
    date: Date;
    description?: string;
};

type Timestamp = string; // ISO 8601 format string

type Duration = number; // Duration in milliseconds
