"use client";
import { Store } from "./Store";
import {Provider} from 'react-redux';

export function ClientProvider({ children }: {
    children: React.ReactNode;
}) {
    return <Provider store={Store}>{children}</Provider>
}