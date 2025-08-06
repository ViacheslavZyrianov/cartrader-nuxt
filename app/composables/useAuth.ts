export default () => {
    const useSignUp = async (body) => {
        const supabase = useSupabaseClient();
        await supabase.auth.signUp(body)

        supabase.auth.onAuthStateChange((event, session) => {
            navigateTo('/profile/listings')
            // if (event === 'INITIAL_SESSION') {
            //     // handle initial session
            // } else if (event === 'SIGNED_IN') {
            //     // handle sign in event
            // } else if (event === 'SIGNED_OUT') {
            //     // handle sign out event
            // } else if (event === 'PASSWORD_RECOVERY') {
            //     // handle password recovery event
            // } else if (event === 'TOKEN_REFRESHED') {
            //     // handle token refreshed event
            // } else if (event === 'USER_UPDATED') {
            //     // handle user updated event
            // }
        })
    }

    return {
        useSignUp
    }
}
