import {supabase} from "@/lib/supabase";
import React, {createContext, useEffect, useState} from "react";
import {Session} from "@supabase/supabase-js";

type AuthContextType = {
    session: Session | null;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
    session: null,
    loading: true,
});


const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session)
        })
        const {data: {subscription}} = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setLoading(false)
        })

        return () => {
            subscription.unsubscribe();
        };
    }, [])


    return (
        <AuthContext value={{session, loading}}>
            {children}
        </AuthContext>
    );
};

export {AuthProvider, AuthContext}

